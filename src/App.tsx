import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import "@/assets/css/App.css";

import { items as data } from "./assets/js/items";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
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
