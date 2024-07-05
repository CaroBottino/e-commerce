import type { Meta, StoryObj } from "@storybook/react";
import { IItem } from "../../interfaces/IItem";
import { BrowserRouter } from "react-router-dom";
import CWItemListContainer from ".";
import { ItemsDecorator } from "../../utils/storybook/itemsProviderMock";

const demoItems: IItem[] = [
  {
    id: "1",
    name: "Muñeca Barbie Fashionistas Closet De Lujo Gbk12 Mattel",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_819420-MLA51075183518_082022-F.webp",
    desc: "Barbie Fashionistas Ultimate Closet - Juguete de moda portátil con muñeca, ropa, accesorios y perchas Plástico El juego de muñecas y accesorios Barbie Ultimate Closet tiene estilo dentro y fuera con ropa y accesorios incluidos. El armario rosa está decorado con puertas dobles transparentes para un vistazo al armario de la muñeca Barbie. El espacio de estante almacena y muestra accesorios, y un estante plegable sostiene la moda para divertirse. Barbie La muñeca lleva un mameluco floral y tiene dos vestidos adicionales para cambiar su atuendo. Tres pares de zapatos, dos collares y dos bolsos crean diferentes looks en un instante. Un asa de transporte hace que sea fácil de guardar o llevar sobre la marcha. Mezcla y combina para jugar a la moda y la diversión de contar historias ",
    stock: 9,
    price: 49676,
    discount: 10,
    rating: 5,
    tags: ["kids", "play", "toys"],
    categories: ["toys"],
    seller_id: "1",
  },
  {
    id: "2",
    name: "Tablet Philco Tp10a332 10.1'' Ips 32gb 2gb Android 11 Con Funda",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_886369-MLA52088853536_102022-F.webp",
    desc: "- Microprocesador: RK3566, Quad-core ARM Cortex™-A55 - S.O: Android 11 - Memoria RAM: 2 GB - Memoria Interna: 32 GB - Slot de memoria: MicroSD Expansible hasta 512GB - Pantalla: 10.1” - Resolución: 1280x800 IPS - Conectividad: Wi-Fi - Bluetooth: 4.2 - Cámara frontal: 2 Mp - Cámara Posterior: 5Mp - Batería: 6000 mAH - Alimentación: 5V 2A (Incluye cable de alimentación USB C / No Incluye Cargador de pared) - Incluye Funda - Dimensiones (En Cms): 24.5 x 0.98 x 16.3 - Peso (Kgs): 0.505",
    stock: 4,
    price: 45999,
    discount: 10,
    rating: 4,
    tags: ["electronics", "tablet", "computing"],
    categories: ["electronics"],
    seller_id: "1",
  },
  {
    id: "3",
    name: "Cafetera Piccolo Xs Manual Roja Nescafé Dolce Gusto",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_772836-MLA46885301641_072021-F.webp",
    desc: "NESCAFÉ® Dolce Gusto® Piccolo XS es extrapequeña, con su tamaño compacto y moderna estilo, está diseñado por expertos para adaptarse a cualquier cocina. Piccolo XS mide solo 14 cm (ancho) x 28 cm (alto) x 27cm (profundidad).",
    price: 47952,
    stock: 9,
    discount: 20,
    rating: 5,
    tags: ["coffee", "cafe", "rico"],
    categories: ["alimentos"],
    seller_id: "1",
  },
  {
    id: "4",
    name: "Taladro Atornillador Percutor + 2 Baterias Gp By Lusqtoff",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_656678-MLA69951087361_062023-F.webp",
    desc: "CONTENIDO DE LA PUBLICACIÓN • 1 Taladro/ Atornillador Percutor Garde Plus by Lusqtoff • 2 Baterías • 1 Cargador • 1 Maletín",
    price: 31795.69,
    stock: 2,
    discount: 0,
    rating: 2.5,
    tags: ["taladro", "reparaciones"],
    categories: ["electronics"],
    seller_id: "1",
  },
];

const searchItems: IItem[] = [
  {
    id: "1",
    name: "Muñeca Barbie Fashionistas Closet De Lujo Gbk12 Mattel",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_819420-MLA51075183518_082022-F.webp",
    desc: "Barbie Fashionistas Ultimate Closet - Juguete de moda portátil con muñeca, ropa, accesorios y perchas Plástico El juego de muñecas y accesorios Barbie Ultimate Closet tiene estilo dentro y fuera con ropa y accesorios incluidos. El armario rosa está decorado con puertas dobles transparentes para un vistazo al armario de la muñeca Barbie. El espacio de estante almacena y muestra accesorios, y un estante plegable sostiene la moda para divertirse. Barbie La muñeca lleva un mameluco floral y tiene dos vestidos adicionales para cambiar su atuendo. Tres pares de zapatos, dos collares y dos bolsos crean diferentes looks en un instante. Un asa de transporte hace que sea fácil de guardar o llevar sobre la marcha. Mezcla y combina para jugar a la moda y la diversión de contar historias ",
    stock: 9,
    price: 49676,
    discount: 10,
    rating: 5,
    tags: ["kids", "play", "toys"],
    categories: ["toys"],
    seller_id: "1",
  },
  {
    id: "5",
    name: "Barbie Fashionista 197 Con Brackets Y Estuche Mattel",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_676395-MLA70799338049_072023-F.webp",
    desc: "Barbie Fashionistas celebra la diversidad y ofrece infinitas posibilidades para contar historias y explorar la moda. ¡Con esta gama inclusiva de muñecas, los niños pueden ver lo divertido que es expresar la personalidad a través del estilo! Son un regalo ideal para los niños amantes de la moda en todas partes. Diseñada para reflejar el mundo que ven los niños hoy en día, esta diversa línea de Barbie Fashionistas muestra estilos brillantes y modernos que crean infinitas posibilidades para contar historias.¡Conoce a la primera muñeca Barbie Fashionistas con frenillos!Con una hermosa sonrisa, anteojos de sol con margaritas rosadas y tacones de plataforma amarillos, su look presenta muchos detalles que resaltan su personalidad. Ella tiene cabello rubio y un tipo de cuerpo original, ¡y hace una declaración colorida en un vestido arcoíris con mangas decorativas con volantes! Medida Barbie 30 cm de alto. Medida Estuche: 32 x 5 x 10 cm. Infancenter..mas que juguetes!!",
    price: 21899,
    stock: 39,
    discount: 0,
    rating: 2,
    tags: ["barbie", "toy", "doll"],
    categories: ["toys"],
    seller_id: "1",
  },
  {
    id: "7",
    name: "Muñeca Barbie Cutie Reveal Modelo Surtido Hhg18 Mattel",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_995511-MLA70883404468_082023-F.webp",
    desc: "La tienda no incluyó una descripción del producto",
    price: 41990,
    stock: 69,
    discount: 0,
    rating: 5,
    tags: ["barbie", "kids", "play"],
    categories: ["toys"],
    seller_id: "1",
  },
];

const meta: Meta<typeof CWItemListContainer> = {
  title: "CafeWeb/ItemListContainer",
  component: CWItemListContainer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWItemListContainer>;

export const ItemsList: Story = {
  decorators: [ItemsDecorator],
  parameters: {
    itemsOptions: {
      loading: false,
      items: demoItems,
    },
  },
  render: () => (
    <BrowserRouter>
      <CWItemListContainer />
    </BrowserRouter>
  ),
};

export const LoadingItems: Story = {
  decorators: [ItemsDecorator],
  parameters: {
    itemsOptions: {
      loading: true,
      items: undefined,
    },
  },
  render: () => (
    <BrowserRouter>
      <CWItemListContainer />
    </BrowserRouter>
  ),
};

export const ItemsSearchResult: Story = {
  decorators: [ItemsDecorator],
  parameters: {
    itemsOptions: {
      showSearchResult: true,
      criteria: "barbie",
      items: searchItems,
    },
  },
  render: () => (
    <BrowserRouter>
      <CWItemListContainer />
    </BrowserRouter>
  ),
};
