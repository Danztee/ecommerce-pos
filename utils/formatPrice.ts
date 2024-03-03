const formatPrice = (price: number) => {
  let formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  }).format((price / 100).toFixed(2));
  return formattedPrice;
};

export default formatPrice;
