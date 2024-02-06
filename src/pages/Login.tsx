import { useState } from "react";
import CWLoginForm from "../components/CWForms/CWLoginForm";
import CWSignUpForm from "../components/CWForms/CWSignUpForm";

const LoginPage = () => {
  const [login, setLogin] = useState(true);

  return login ? <CWLoginForm setLogin={setLogin} /> : <CWSignUpForm setLogin={setLogin} />;
};

export default LoginPage;
