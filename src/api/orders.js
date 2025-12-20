const BASE_URL = import.meta.env.VITE_API_URL;

export async function getOrders() {
  const res = await fetch(`${BASE_URL}/orders`);
  if (!res.ok) throw new Error("Failed to fetch orders");
  return res.json();
}

export async function getOrderById(id) {
  const res = await fetch(`${BASE_URL}/orders/${id}`);
  if (!res.ok) throw new Error("Failed to fetch order");
  return res.json();
}
