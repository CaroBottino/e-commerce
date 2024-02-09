import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@/assets/css/App.css";
import { Box } from "@mui/material";
import CWNavBar from "./components/CWNavBar";
import CWFooter from "./components/CWFooter";
import HomePage from "./pages/Home";
import ItemDetailPage from "./pages/ItemDetail";
import AboutMePage from "./pages/AboutMe";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import UserProvider from "./providers/User.provider";

function App() {
  const base_url = import.meta.env.VITE_BASE_URL;

  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <CWNavBar />
          <Box p={2} mr={4} ml={4} mb={16}>
            <Routes>
              <Route path={`${base_url}/`} element={<HomePage />} />
              <Route path={`${base_url}/category/:category`} element={<HomePage />} />
              <Route path={`${base_url}/item/:id`} element={<ItemDetailPage />} />
              <Route path={`${base_url}/login`} element={<LoginPage />} />
              <Route path={`${base_url}/profile`} element={<ProfilePage />} />
              <Route path={`${base_url}/about-me`} element={<AboutMePage />} />
            </Routes>
          </Box>
          <CWFooter />
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
