import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./CWSearchBar.styled";
import { useItemsContext } from "../../hooks/useItemsContext";

const CWSearchBar = () => {
  const { setCriteria, searchItems, criteria } = useItemsContext();
  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_BASE_URL;

  const handleKeyDown = () => {
    searchItems();
    navigate(`${base_url}/`);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search products, brands and more..."
        fullWidth
        value={criteria}
        onChange={(event) => {
          setCriteria(event.target.value);
        }}
        onKeyDown={(e) => e.key === "Enter" && handleKeyDown()}
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default CWSearchBar;
