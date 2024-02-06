import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./CWSearchBar.styled";

const CWSearchBar = () => {
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
      </Search>
    </>
  );
};

export default CWSearchBar;
