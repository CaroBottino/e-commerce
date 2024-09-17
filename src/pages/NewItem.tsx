import CWCardContainer from "../components/CWCardContainer";
import CWCreateItemForm from "../components/CWForms/CWCreateItemForm";
import { Grid } from "@mui/material";

const NewItemPage = () => {
  return (
    <Grid container marginTop={"20px"}>
      <CWCardContainer sx={{ marginTop: 6 }}>
        <CWCreateItemForm />
      </CWCardContainer>
    </Grid>
  );
};

export default NewItemPage;
