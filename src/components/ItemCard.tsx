import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { IItem } from "../interfaces/IItem";

type ItemCardProps = {
  item: IItem;
};

function ItemCard({ item }: ItemCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={item.img}
          alt={item.id}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            $ {Intl.NumberFormat("es-CL").format(item.price)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ItemCard;
