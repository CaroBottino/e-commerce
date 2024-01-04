import { IItem } from "../../interfaces/IItem";
import { Button, ButtonGroup, Grid } from "@mui/material";
import { ItemDescription, ItemImg, ItemPrice, ItemTitle } from "./ItemDetail.styled";

type ItemDetailProps = {
  item: IItem;
};

const ItemDetailContainer = ({ item }: ItemDetailProps) => {
  return (
    <>
      <Grid container className="item-detail-container">
        {item && (
          <Grid item container spacing={2}>
            <Grid item xs={12} md={6}>
              <ItemImg component={item.img ? "img" : "div"} src={item.img} alt={item.desc} />
            </Grid>
            <Grid item container xs={12} md={6} spacing={2}>
              <Grid item xs={12}>
                <ItemTitle>{item.name}</ItemTitle>
              </Grid>
              <Grid item xs={12}>
                <ItemPrice>$ {item.price}</ItemPrice>
              </Grid>
              <Grid item xs={12}>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                  <Button>-</Button>
                  <Button>Q</Button>
                  <Button>+</Button>
                </ButtonGroup>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained">Add to cart!</Button>
              </Grid>
              <Grid item xs={12}>
                <ItemDescription>{item.desc}</ItemDescription>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default ItemDetailContainer;
