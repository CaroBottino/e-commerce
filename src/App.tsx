import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@/assets/css/App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import ItemDetailPage from "./pages/ItemDetail";
import UserProvider from "./providers/User.provider";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";

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
            <Route path={`${base_url}/profile`} element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
