import CWCreateItemForm from "../components/CWForms/CWCreateItemForm";
import { Grid } from "@mui/material";

const NewItemPage = () => {
  return (
    <Grid container marginTop={"20px"}>
      <CWCreateItemForm />
    </Grid>
  );
};

export default NewItemPage;
