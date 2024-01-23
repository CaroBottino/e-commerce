import { Alert, Button, FormControl, Grid, Link, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormHelper, FormInput, FormLabel } from "./Forms.styled";
import { IFormLogin } from "./Forms.interfaces";
import { useUserContext } from "../../providers/User.provider";
import usersService from "../../services/users.service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface ILoginFormProps {
  setLogin: (login: boolean) => void;
}

const LoginForm = ({ setLogin }: ILoginFormProps) => {
  const { loginUser } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>();

  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState(false);

  const onSubmit: SubmitHandler<IFormLogin> = async (data) => {
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

        <Grid item xs={12}>
          <Typography>
            Don't have an account? Register{" "}
            <Link underline="hover" onClick={() => setLogin(false)}>
              here
            </Link>
            .
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
