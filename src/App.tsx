import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import ItemDetailPage from "./pages/ItemDetail";
import "@/assets/css/App.css";

function App() {
  const base_url = import.meta.env.VITE_BASE_URL;

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={`${base_url}/`} element={<HomePage />} />
          <Route path={`${base_url}/category/:category`} element={<HomePage />} />
          <Route path={`${base_url}/item/:id`} element={<ItemDetailPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
