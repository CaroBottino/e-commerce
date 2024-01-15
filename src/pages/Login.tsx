import { useState } from "react";
import LoginForm from "../components/Forms/LoginForm";
import SignUpForm from "../components/Forms/SignUpForm";

const LoginPage = () => {
  const [login, setLogin] = useState(true);

  return login ? <LoginForm setLogin={setLogin} /> : <SignUpForm setLogin={setLogin} />;
};

export default LoginPage;
