import { useState } from "react";
import CWLoginForm from "../components/CWForms/CWLoginForm";
import CWSignUpForm from "../components/CWForms/CWSignUpForm";
import { Box } from "@mui/material";

const LoginPage = () => {
  const [login, setLogin] = useState(true);

  return (
    <Box mt={login ? "30vh" : "15vh"} width={"90vw"}>
      {login ? <CWLoginForm setLogin={setLogin} /> : <CWSignUpForm setLogin={setLogin} />}
    </Box>
  );
};

export default LoginPage;
