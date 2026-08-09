import API from "./api";

export const placeOrder = async (orderData) => {
  const response = await API.post("/checkout", orderData);

  return response.data;
};

export const getMyOrders = async () => {
  const response = await API.get("/orders");

  return response.data;
};
