import "@/assets/css/PageContentContainer.css";
import CWCreateItemForm from "../components/CWForms/CWCreateItemForm";
import { Grid } from "@mui/material";

const NewItemPage = () => {
  return (
    <Grid container className="page-content-container">
      <CWCreateItemForm />
    </Grid>
  );
};

export default NewItemPage;
