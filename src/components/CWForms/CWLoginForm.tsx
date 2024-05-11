import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Alert, Button, FormControl, Grid, Link, Typography } from "@mui/material";
import { FormHelper, FormInput, FormLabel } from "./CWForms.styled";
import { ICWFormLogin } from "./CWForms.interfaces";
import usersService from "../../services/users.service";
import { useUserContext } from "../../hooks/useUserContext";

interface ICWLoginFormProps {
  changeMode: () => void;
}

const CWLoginForm = ({ changeMode }: ICWLoginFormProps) => {
  const { loginUser } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICWFormLogin>();

  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState(false);

  const onSubmit: SubmitHandler<ICWFormLogin> = async (data) => {
    const user = await usersService.getUserByEmail(data.email);

    if (user && user.password === data.password) {
      loginUser(user);
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
              User or password incorrect
            </Alert>
          )}
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

        <Grid item xs={12} mt={"1rem"}>
          <Typography>
            Don't have an account? Register{" "}
            <Link underline="hover" onClick={changeMode}>
              here
            </Link>
            .
          </Typography>
        </Grid>

        <Grid item xs={12} mt={"2rem"}>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CWLoginForm;
