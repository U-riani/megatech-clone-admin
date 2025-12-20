import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrders } from "../api/orders";

export default function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrders()
      .then(setOrders)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading orders…</div>;

  return (
    <div className="rounded-lg bg-white shadow">
      <table className="w-full text-sm">
        <thead className="border-b bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left">Order ID</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Total</th>
            <th className="px-4 py-3">Created</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o._id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3 font-mono text-xs">
                <Link to={`/orders/${o._id}`} className="underline">
                  {o._id}
                </Link>
              </td>

              <td className="px-4 py-3 text-center">
                <span
                  className={
                    o.status === "paid"
                      ? "text-green-600"
                      : o.status === "pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }
                >
                  {o.status}
                </span>
              </td>

              <td className="px-4 py-3 text-center">${o.totalAmount}</td>

              <td className="px-4 py-3 text-center">
                {new Date(o.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
