import type { Meta, StoryObj } from "@storybook/react";
import CWItemCard from ".";
import { IItem } from "../../interfaces/IItem";
import { BrowserRouter } from "react-router-dom";

const demoItem: IItem = {
    "id": "1",
    "name": "Muñeca Barbie Fashionistas Closet De Lujo Gbk12 Mattel",
    "img": "https://http2.mlstatic.com/D_NQ_NP_2X_819420-MLA51075183518_082022-F.webp",
    "desc": "Barbie Fashionistas Ultimate Closet - Juguete de moda portátil con muñeca, ropa, accesorios y perchas Plástico El juego de muñecas y accesorios Barbie Ultimate Closet tiene estilo dentro y fuera con ropa y accesorios incluidos. El armario rosa está decorado con puertas dobles transparentes para un vistazo al armario de la muñeca Barbie. El espacio de estante almacena y muestra accesorios, y un estante plegable sostiene la moda para divertirse. Barbie La muñeca lleva un mameluco floral y tiene dos vestidos adicionales para cambiar su atuendo. Tres pares de zapatos, dos collares y dos bolsos crean diferentes looks en un instante. Un asa de transporte hace que sea fácil de guardar o llevar sobre la marcha. Mezcla y combina para jugar a la moda y la diversión de contar historias ",
    "stock": 9,
    "price": 49676,
    "discount": 10,
    "rating": 5,
    "tags": [
        "kids",
        "play",
        "toys"
    ],
    "categories": [
        "toys"
    ],
    "seller_id": "1"
};

const meta: Meta<typeof CWItemCard> = {
  title: "CafeWeb/ItemCard",
  component: CWItemCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWItemCard>;

export const ItemCard: Story = {
  render: () => (
    <BrowserRouter>
      <CWItemCard item={demoItem} />
    </BrowserRouter>
  ),
};
