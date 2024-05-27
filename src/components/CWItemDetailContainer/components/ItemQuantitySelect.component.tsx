import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import { useItemsContext } from "../../../hooks/useItemsContext";

type ItemQuantitySelectProps = {
  quantity: number;
  handleChange: (q: number) => void;
};

const ItemQuantitySelect = ({ quantity, handleChange }: ItemQuantitySelectProps) => {
  const { item } = useItemsContext();

  return (
    item && (
      <FormControl size="small" fullWidth>
        <Select
          id="item-q-select"
          value={quantity}
          onChange={(event) => handleChange(Number(event?.target.value))}
          renderValue={(selected) => <Typography>Quantity: {selected}</Typography>}
          MenuProps={{
            PaperProps: { sx: { maxHeight: "200px" } },
          }}
        >
          {[...Array(item.stock)].map((_q, i) => (
            <MenuItem key={i} value={i + 1}>
              {i + 1}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  );
};

export default ItemQuantitySelect;
