import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/CWItemDetailContainer";
import "@/assets/css/ItemDetailPage.css";
import { useEffect } from "react";
import ItemsProvider from "../providers/Items.provider";
import CWItemDetailSkeleton from "../components/CWSkeletons/CWItemDetailSkeleton";
import { useItemsContext } from "../hooks/useItemsContext";

const ItemDetailPage = () => {
  const { id } = useParams();
  const { loading, getItemInfo, item } = useItemsContext();

  useEffect(() => {
    id && getItemInfo(id);
  }, [id]);

  return (
    <ItemsProvider>
      {loading ? (
        <CWItemDetailSkeleton />
      ) : item ? (
        <ItemDetailContainer item={item} />
      ) : (
        <div>Item not found</div>
      )}
    </ItemsProvider>
  );
};

export default ItemDetailPage;
