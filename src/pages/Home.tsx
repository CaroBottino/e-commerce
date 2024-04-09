import CWItemListContainer from "../components/CWItemListContainer";
import ItemsProvider from "../providers/Items.provider";

const HomePage = () => {
  return (
    <ItemsProvider>
      <CWItemListContainer />
    </ItemsProvider>
  );
};

export default HomePage;
