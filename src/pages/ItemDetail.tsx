import "@/assets/css/ItemDetailPage.css";
import ItemDetailContainer from "../components/CWItemDetailContainer";
import ItemsProvider from "../providers/Items.provider";

const ItemDetailPage = () => {
  return (
    <ItemsProvider>
      <ItemDetailContainer />
    </ItemsProvider>
  );
};

export default ItemDetailPage;
