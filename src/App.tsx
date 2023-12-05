import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "@/assets/css/App.css";

function App() {
  const base_url = import.meta.env.VITE_BASE_URL;

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={`${base_url}/`} element={<ItemListContainer />} />
          <Route path={`${base_url}/category/:category`} element={<ItemListContainer />} />
          <Route path={`${base_url}/item/:id`} element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
