import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import { IItem } from "./interfaces/IItem";
import "@/assets/css/App.css";

function App() {
  const [items, setItems] = useState<IItem[]>([]);

  const getItems = async () => {
    try {
      await fetch("src/assets/data/items.json").then(async (response) => {
        const items = await response.json();
        items && setItems(items);
      });
    } catch (error) {
      console.log("Error getting items: ", error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <NavBar />
      <ItemListContainer items={items} />
      <Footer />
    </>
  );
}

export default App;
