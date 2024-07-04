import { Meta, StoryObj } from "@storybook/react";
import CWNavBar from ".";
import { BrowserRouter } from "react-router-dom";
import { UserContext, UserContextProviderProps } from "../../providers/User.provider";
import { ReactElement } from "react";
import { ItemsContext, ItemsContextProviderProps } from "../../providers/Items.provider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { IUser } from "../../interfaces/IUser";
import { IItem } from "../../interfaces/IItem";
import { UserType } from "../../enums/user.enum";

const demoUser: IUser = {
  id: "1",
  name: "Jane",
  surname: "Doe",
  email: "jane.doe@mail.com",
  avatar:
    "https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg",
  password: "1234pass",
  type: 2,
  cart: [],
};

type UserProviderMockProps = {
  userOptions: UserContextProviderProps;
  children: ReactElement;
};

const UserProviderMock = ({ userOptions, children }: UserProviderMockProps) => {
  const user = userOptions?.user;
  const loginUser = userOptions?.loginUser;
  const logoutUser = userOptions?.logoutUser;
  const addToCart = userOptions?.addToCart;
  const deleteFromCart = userOptions?.deleteFromCart;
  const increaseQuantity = userOptions?.increaseQuantity;
  const decreaseQuantity = userOptions?.decreaseQuantity;
  const cartTotal = userOptions?.cartTotal;
  const hasSellingPermissions = userOptions?.hasSellingPermissions;

  return (
    <UserContext.Provider
      value={{
        user,
        loginUser,
        logoutUser,
        addToCart,
        deleteFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartTotal,
        hasSellingPermissions,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const UserDecorator = (Story: any, { parameters }: any) => (
  <UserProviderMock userOptions={parameters.userOptions}>
    <Story />
  </UserProviderMock>
);

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

type ItemsProviderMockProps = {
  itemsOptions: ItemsContextProviderProps;
  children: ReactElement;
};

const ItemsProviderMock = ({ itemsOptions, children }: ItemsProviderMockProps) => {
  const loading = itemsOptions?.loading ?? false;
  const setLoading = itemsOptions?.setLoading ? itemsOptions?.setLoading : () => {};
  const items = itemsOptions?.items;
  const item = itemsOptions?.item;
  const setItem = itemsOptions?.setItem ? itemsOptions?.setItem : () => {};
  const getAllItems = itemsOptions?.getAllItems ? itemsOptions?.getAllItems : () => {};
  const getItemsByType = itemsOptions?.getItemsByType ? itemsOptions?.getItemsByType : () => {};
  const getItemInfo = itemsOptions?.getItemInfo ? itemsOptions?.getItemInfo : () => {};
  const criteria = itemsOptions?.criteria;
  const setCriteria = itemsOptions?.setCriteria ? itemsOptions?.setCriteria : () => {};
  const searchItems = itemsOptions?.searchItems ? itemsOptions?.searchItems : () => {};
  const showSearchResult = itemsOptions?.showSearchResult ?? false;
  const setShowSearchResult = itemsOptions?.setShowSearchResult
    ? itemsOptions?.setShowSearchResult
    : () => {};
  const createItem = itemsOptions?.createItem;

  return (
    <ItemsContext.Provider
      value={{
        loading,
        setLoading,
        items,
        item,
        setItem,
        getAllItems,
        getItemsByType,
        getItemInfo,
        criteria,
        setCriteria,
        searchItems,
        showSearchResult,
        setShowSearchResult,
        createItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

const ItemsDecorator = (Story: any, { parameters }: any) => (
  <ItemsProviderMock itemsOptions={parameters.itemsOptions}>
    <Story />
  </ItemsProviderMock>
);

const cwTheme = createTheme({
  typography: {
    fontFamily: ["Proxima Nova", "-apple-system", "Roboto", "Arial", "sans-serif"].join(","),
  },
});

const ThemeDecoratorMock = ({ children }: { children: ReactElement }) => {
  return <ThemeProvider theme={cwTheme}>{children}</ThemeProvider>;
};

const ThemeDecorator = (Story: any) => (
  <ThemeDecoratorMock>
    <Story />
  </ThemeDecoratorMock>
);

const meta: Meta<typeof CWNavBar> = {
  title: "CafeWeb/NavBar",
  component: CWNavBar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWNavBar>;

export const NavBar: Story = {
  decorators: [UserDecorator, ItemsDecorator, ThemeDecorator],
  parameters: {
    userOptions: {
      user: demoUser,
      loginUser: () => {},
      logoutUser: () => {},
      addToCart: () => {},
      deleteFromCart: () => {},
      increaseQuantity: () => {},
      decreaseQuantity: () => {},
      cartTotal: 0,
      hasSellingPermissions: () => false,
    },
    itemsOptions: {
      loading: true,
      items: demoItems,
    },
  },
  render: () => (
    <BrowserRouter>
      <CWNavBar />
    </BrowserRouter>
  ),
};

export const NoUserLogged: Story = {
  decorators: [UserDecorator, ItemsDecorator, ThemeDecorator],
  parameters: {
    userOptions: {
      user: {
        id: undefined,
        name: undefined,
        surname: undefined,
        email: undefined,
        avatar: undefined,
        password: undefined,
        type: UserType.BUYER,
        cart: [],
      },
      loginUser: () => {},
      logoutUser: () => {},
      addToCart: () => {},
      deleteFromCart: () => {},
      increaseQuantity: () => {},
      decreaseQuantity: () => {},
      cartTotal: 0,
      hasSellingPermissions: () => false,
    },
    itemsOptions: {
      loading: true,
      items: demoItems,
    },
  },
  render: () => (
    <BrowserRouter>
      <CWNavBar />
    </BrowserRouter>
  ),
};
