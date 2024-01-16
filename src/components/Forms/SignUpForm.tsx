import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert, Button, FormControl, Grid, Link, Typography } from "@mui/material";
import { FormHelper, FormInput, FormLabel } from "./Forms.styled";
import { IFormSignUp } from "./Forms.interfaces";
import { useUserContext } from "../../providers/User.provider";
import usersService from "../../services/users.service";
import { IUser } from "../../interfaces/IUser";
import { UserType } from "../../enums/user.enum";

interface ISignUpFormProps {
  setLogin: (login: boolean) => void;
}

const SignUpForm = ({ setLogin }: ISignUpFormProps) => {
  const { setUser } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormSignUp>();

  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState(false);

  const onSubmit: SubmitHandler<IFormSignUp> = async (data) => {
    const userToPost: IUser = {
      name: data.name,
      surname: data.surname,
      email: data.email,
      password: data.password,
      avatar: data.avatar,
      type: UserType.BUYER,
    };

    const user = await usersService.postUser(userToPost);

    if (user) {
      setUser(user);
      setError(false);
      navigate(base_url);
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
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

        <Grid item xs={12}>
          <FormControl defaultValue="" required>
            <FormLabel>Avatar</FormLabel>
            <FormInput {...register("avatar")} />
            {errors.avatar && <FormHelper>{errors.avatar.message}</FormHelper>}
            {/* <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={formState}
              alt={item.title}
              loading="lazy"
            /> */}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Typography>
            Already have an account? Log in{" "}
            <Link underline="hover" onClick={() => setLogin(true)}>
              here
            </Link>
            .
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Sign up!
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignUpForm;
