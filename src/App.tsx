import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import ItemDetailPage from "./pages/ItemDetail";
import "@/assets/css/App.css";
import UserProvider from "./providers/User.provider";
import LoginPage from "./pages/Login";

function App() {
  const base_url = import.meta.env.VITE_BASE_URL;

  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={`${base_url}/`} element={<HomePage />} />
            <Route path={`${base_url}/category/:category`} element={<HomePage />} />
            <Route path={`${base_url}/item/:id`} element={<ItemDetailPage />} />
            <Route path={`${base_url}/login`} element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
