import React, { useEffect, useState } from "react";

interface Order {
  id: string;
  items: { title: string; quantity: number }[];
}

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Simulate fetching orders
    const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(storedOrders);
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <>
          {orders.map((order) => (
            <div key={order.id} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
              <h4>Order #{order.id}</h4>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.title} (x{item.quantity})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Orders;
