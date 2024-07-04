import type { Meta, StoryObj } from "@storybook/react";
import { IItem } from "../../interfaces/IItem";
import { BrowserRouter } from "react-router-dom";
import CWItemDetailContainer from ".";
import { ItemsContext, ItemsContextProviderProps } from "../../providers/Items.provider";
import { ReactElement } from "react";

const demoItem: IItem = {
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
};

type ItemsProviderMockProps = {
  itemsOptions: ItemsContextProviderProps;
  children: ReactElement;
};

const ItemsProviderMock = ({ itemsOptions, children }: ItemsProviderMockProps) => {
  const loading = itemsOptions?.loading;
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
  const showSearchResult = itemsOptions?.showSearchResult;
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

const meta: Meta<typeof CWItemDetailContainer> = {
  title: "CafeWeb/ItemDetailContainer",
  component: CWItemDetailContainer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWItemDetailContainer>;

export const ItemCard: Story = {
  decorators: [ItemsDecorator],
  parameters: {
    itemsOptions: {
      loading: false,
      item: demoItem
    },
  },
  render: () => (
    <BrowserRouter>
      <CWItemDetailContainer />
    </BrowserRouter>
  ),
};

export const LoadingItemCard: Story = {
  decorators: [ItemsDecorator],
  parameters: {
    itemsOptions: {
      loading: true,
      item: undefined,
    },
  },
  render: () => (
    <BrowserRouter>
      <CWItemDetailContainer />
    </BrowserRouter>
  ),
};

export const ItemCardNotFound: Story = {
  decorators: [ItemsDecorator],
  render: () => (
    <BrowserRouter>
      <CWItemDetailContainer />
    </BrowserRouter>
  ),
};
