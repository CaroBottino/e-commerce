import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert, FormControl, Grid, Typography } from "@mui/material";
import {
  FormAvatarImg,
  FormButton,
  FormHelper,
  FormInput,
  FormLabel,
  FormLink,
  FormOutlinedButton,
} from "./CWForms.styled";
import { ICWFormSignUp } from "./CWForms.interfaces";
import usersService from "../../services/users.service";
import { IUser } from "../../interfaces/IUser";
import { UserType } from "../../enums/user.enum";
import { useUserContext } from "../../hooks/useUserContext";
import CWButton from "../CWButton";

interface ICWSignUpFormProps {
  editMode?: boolean;
  changeMode?: () => void;
  user?: IUser;
  onSubmitHandler?: () => void;
}

const CWSignUpForm = ({
  editMode = false,
  changeMode,
  user,
  onSubmitHandler,
}: ICWSignUpFormProps) => {
  const { loginUser } = useUserContext();

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ICWFormSignUp>();

  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState(false);
  const watchAvatar = watch("avatar");

  const onSubmit: SubmitHandler<ICWFormSignUp> = async (data) => {
    let user;
    const userToPost: IUser = {
      name: data.name,
      surname: data.surname,
      email: data.email,
      password: data.password,
      avatar: data.avatar,
      type: data.type ?? UserType.BUYER,
      cart: data.cart ?? [],
    };

    if (editMode) {
      user = await usersService.updateUser({ ...userToPost, id: data.id });
    } else {
      user = await usersService.createUser(userToPost);
    }

    if (user) {
      loginUser(user);
      setError(false);
    } else {
      setError(true);
    }

    !editMode && navigate(base_url);

    onSubmitHandler && onSubmitHandler();
  };

  useEffect(() => {
    if (user) {
      setValue("id", user.id!);
      setValue("name", user.name!);
      setValue("surname", user.surname!);
      setValue("email", user.email!);
      setValue("password", user.password!);
      setValue("avatar", user.avatar!);
      setValue("type", user.type!);
      setValue("cart", user.cart!);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} textAlign={"center"}>
        <Grid container item xs={12} md={editMode && 6}>
          <Grid container item xs={12} justifyContent={"center"} alignItems={"center"}>
            {error && (
              <Alert severity="error" sx={{ width: "400px" }}>
                Couldn't register user
              </Alert>
            )}
          </Grid>

          <Grid item xs={12}>
            <FormControl defaultValue="" required>
              <FormLabel>Name</FormLabel>
              <FormInput
                {...register("name", {
                  required: "this is required",
                })}
              />
              {errors.name && <FormHelper>{errors.name.message}</FormHelper>}
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl defaultValue="" required>
              <FormLabel>Surname</FormLabel>
              <FormInput
                {...register("surname", {
                  required: "this is required",
                })}
              />
              {errors.surname && <FormHelper>{errors.surname.message}</FormHelper>}
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl defaultValue="" required>
              <FormLabel>Email</FormLabel>
              <FormInput
                {...register("email", {
                  required: "this is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && <FormHelper>{errors.email.message}</FormHelper>}
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl defaultValue="" required>
              <FormLabel>Password</FormLabel>
              <FormInput
                type="password"
                {...register("password", {
                  required: "this is required",
                })}
              />
              {errors.password && <FormHelper>{errors.password.message}</FormHelper>}
            </FormControl>
          </Grid>
        </Grid>
        <Grid container item xs={12} md={editMode && 6}>
          <Grid container item xs={12} justifyContent={"center"} alignItems={"center"}>
            <FormControl defaultValue="">
              <FormLabel>Avatar</FormLabel>
              <FormInput {...register("avatar")} />
              <FormHelper sx={{ color: "lightgray" }}>
                {errors?.avatar?.message ?? "url to any image you like"}
              </FormHelper>
              {watchAvatar && (
                <Grid item textAlign={"center"}>
                  <FormAvatarImg src={watchAvatar} />
                </Grid>
              )}
            </FormControl>
          </Grid>
          {!editMode && (
            <Grid item xs={12} mt={"1rem"}>
              <Typography>
                Already have an account? Log in{" "}
                <FormLink underline="hover" onClick={changeMode}>
                  here
                </FormLink>
                .
              </Typography>
            </Grid>
          )}
          <Grid item xs={12} mt={"1rem"}>
            <CWButton
              variant="contained"
              type="submit"
              label={editMode ? "Update info" : "Sign up!"}
            />
            {editMode && (
              <CWButton
                onClick={onSubmitHandler}
                label="Back"
                variant="outlined"
                sx={{ marginLeft: 2 }}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default CWSignUpForm;
