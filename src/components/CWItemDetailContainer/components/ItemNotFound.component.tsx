import { Box, Grid, Typography } from "@mui/material";

const ItemNotFound = () => {
  return (
    <Grid container item textAlign={"center"}>
      <Grid item xs={12}>
        <Box
          component="img"
          sx={{
            maxHeight: "30vh",
          }}
          src={"/images/not-found/item-not-found.png"}
          alt={"item note found"}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>Ups! Couldn't find your item</Typography>
      </Grid>
    </Grid>
  );
};

export default ItemNotFound;
