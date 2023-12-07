import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IItem } from "../../interfaces/IItem";
import { Button, ButtonGroup, Grid } from "@mui/material";
import { ItemDescription, ItemImg, ItemPrice, ItemTitle } from "./ItemDetail.styled";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState<IItem>();

  const getItemInfo = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/items/${id}`).then(async (response) => {
        const item = await response.json();

        item && setItem(item);
      });
    } catch (error) {
      console.log("Error getting item info: ", error);
    }
  };

  useEffect(() => {
    getItemInfo();
  }, [id]);

  return (
    <>
      <Grid container>
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
