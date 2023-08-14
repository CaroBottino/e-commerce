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
    <Card sx={{ maxWidth: 345, height: 450 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={item.img}
          alt={item.id}
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            $ {Intl.NumberFormat("es-CL").format(item.price)}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {item.name.length > 38
              ? item.name.substring(0, 38) + "..."
              : item.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ItemCard;
