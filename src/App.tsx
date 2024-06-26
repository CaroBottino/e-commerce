import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@/assets/css/App.css";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CWNavBar from "./components/CWNavBar";
import CWFooter from "./components/CWFooter";
import HomePage from "./pages/Home";
import ItemDetailPage from "./pages/ItemDetail";
import AboutMePage from "./pages/AboutMe";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import UserProvider from "./providers/User.provider";
import ItemsProvider from "./providers/Items.provider";
import NewItemPage from "./pages/NewItem";

const cwTheme = createTheme({
  typography: {
    fontFamily: ["Proxima Nova", "-apple-system", "Roboto", "Arial", "sans-serif"].join(","),
  },
});

function App() {
  const base_url = import.meta.env.VITE_BASE_URL;

  return (
    <ThemeProvider theme={cwTheme}>
      <UserProvider>
        <ItemsProvider>
          <BrowserRouter>
            <CWNavBar />
            <Box p={2} margin={"80px 32px 8px 32px"} minHeight={"calc(90vh - 120px)"}>
              <Routes>
                <Route path={`${base_url}/`} element={<HomePage />} />
                <Route path={`${base_url}/category/:category`} element={<HomePage />} />
                <Route path={`${base_url}/item/:id`} element={<ItemDetailPage />} />
                <Route path={`${base_url}/login`} element={<LoginPage />} />
                <Route path={`${base_url}/profile`} element={<ProfilePage />} />
                <Route path={`${base_url}/new-item`} element={<NewItemPage />} />
                <Route path={`${base_url}/about-me`} element={<AboutMePage />} />
              </Routes>
            </Box>
            <CWFooter />
          </BrowserRouter>
        </ItemsProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
