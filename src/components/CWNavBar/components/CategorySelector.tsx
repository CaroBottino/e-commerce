import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormControl, MenuItem, SelectChangeEvent } from "@mui/material";
import { StyledSelect } from "../CWNavBar.styled";
import { getItemsCategories } from "../../../utils/itemHelper";

const CategorySelector = () => {
  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_BASE_URL;
  const categories = getItemsCategories();

  const [selectedCategory, setSelectedCategory] = useState<string>("Categories");

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    typeof event.target.value === "string" && setSelectedCategory(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <StyledSelect
        id="cw-select"
        value={selectedCategory}
        onChange={handleChange}
        inputProps={{
          MenuProps: {
            MenuListProps: {
              sx: {
                backgroundColor: "#333",
                color: "white",
              },
            },
            MenuItemProps: {
              sx: {
                ":hover": {
                  backgroundColor: "lightgray",
                },
              },
            },
          },
        }}
      >
        <MenuItem value="Categories" onClick={() => navigate(base_url)} key={"cat-item-categories"}>
          Categories
        </MenuItem>
        {categories.map((category) => (
          <MenuItem
            value={category}
            onClick={() => navigate(`${base_url}/category/${category}`)}
            key={`cat-item-${category}`}
          >
            {category}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default CategorySelector;
