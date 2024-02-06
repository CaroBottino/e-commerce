import { CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { IItem } from "../../interfaces/IItem";
import { Link } from "react-router-dom";
import { StyledCard } from "./CWItemCard.styled";

type CWItemCardProps = {
  item: IItem;
};

function ItemCard({ item }: CWItemCardProps) {
  const base_url = import.meta.env.VITE_BASE_URL;

  return (
    <StyledCard>
      <Link to={`${base_url}/item/${item.id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={item.img}
            alt={item.id}
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="text.secondary">
              $ {Intl.NumberFormat("es-CL").format(item.price)}
            </Typography>
            <Typography variant="body1" color="text.secondary" noWrap>
              {item.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </StyledCard>
  );
}

export default ItemCard;
