export const getItemsCategories = () => {
  return ["clothes", "electronics", "toys", "home"];
};

export const priceAsCurrency = (price: number) => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
