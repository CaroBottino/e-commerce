import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Alert, Box, Chip, Grid, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import { ICWFormCreateItem } from "./CWForms.interfaces";
import { FormButton, FormItemImg, FormTitle } from "./CWForms.styled";
import { getItemsCategories } from "../../utils/itemHelper";
import { useItemsContext } from "../../hooks/useItemsContext";
import { useUserContext } from "../../hooks/useUserContext";

const CFCreateItemForm = () => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ICWFormCreateItem>();

  const { createItem } = useItemsContext();
  const { user } = useUserContext();

  const watchImage = watch("img");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const categories = getItemsCategories();

  const onSubmit: SubmitHandler<ICWFormCreateItem> = async (item) => {
    if (user.id) {
      const newItem = await createItem({
        name: item.name,
        img: item.img,
        desc: item.desc,
        price: item.price,
        stock: item.stock,
        seller_id: user.id,
        tags: item.allTags.split(","),
        categories: item.categories,
      });

      if (newItem) {
        setError(false);
        setSuccess(true);
        reset;
      } else {
        setError(true);
        setSuccess(false);
      }
    } else {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container textAlign={"center"}>
        <Grid container item xs={12} justifyContent={"center"} alignItems={"center"} padding={2}>
          {error && (
            <Alert severity="error" sx={{ width: "400px" }}>
              Couldn't create item
            </Alert>
          )}
          {success && (
            <Alert severity="success" sx={{ width: "400px" }}>
              Item created
            </Alert>
          )}
        </Grid>
        <Grid container item xs={12} sm={6}>
          <Grid item xs={12}>
            <FormItemImg src={watchImage} />
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={6} spacing={2}>
          <Grid item xs={12}>
            <FormTitle>🛍️ Tell me about your new item 🤓</FormTitle>
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="name"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <TextField
                  required
                  fullWidth
                  id="item-name"
                  label="Name"
                  error={!!errors?.name}
                  helperText={<>{errors?.name && errors?.name?.message}</>}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="img"
              defaultValue=""
              control={control}
              rules={{
                required: "This field is required",
              }}
              render={({ field }) => (
                <TextField
                  required
                  fullWidth
                  id="item-img"
                  label="Image"
                  error={!!errors?.img}
                  helperText={<>{errors?.img && errors?.img?.message}</>}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="desc"
              defaultValue=""
              control={control}
              rules={{
                required: "This field is required",
                max: {
                  value: 50000,
                  message: "Must be less than 50.000 chars",
                },
              }}
              render={({ field }) => (
                <TextField
                  required
                  fullWidth
                  id="item-desc"
                  label="Description"
                  multiline
                  error={!!errors?.desc}
                  helperText={<>{errors?.desc && errors?.desc?.message}</>}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="price"
              defaultValue={0}
              control={control}
              rules={{
                required: "This field is required",
              }}
              render={({ field }) => (
                <TextField
                  required
                  fullWidth
                  id="item-price"
                  label="Price"
                  type="number"
                  error={!!errors?.price}
                  helperText={<>{errors?.price && errors?.price?.message}</>}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="stock"
              control={control}
              defaultValue={1}
              rules={{
                required: "This field is required",
              }}
              render={({ field }) => (
                <TextField
                  required
                  fullWidth
                  id="item-stock"
                  label="Stock"
                  type="number"
                  error={!!errors?.stock}
                  helperText={<>{errors?.price && errors?.price?.message}</>}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="allTags"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  id="item-tags"
                  label="Tags"
                  helperText={"Any word that could help users find your item (seperated by comma)"}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="categories"
              control={control}
              defaultValue={[categories[0]]}
              render={({ field }) => (
                <Select
                  label="Categories"
                  multiple
                  fullWidth
                  input={<OutlinedInput id="select-multiple-chip" label="Categories" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  {...field}
                >
                  {categories.map((cat) => (
                    <MenuItem key={`cat-${cat}`} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </Grid>
          <Grid item xs={12} mt={"1rem"}>
            <FormButton type="submit">Create my item!</FormButton>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default CFCreateItemForm;
