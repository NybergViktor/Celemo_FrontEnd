import React, { useContext, useEffect } from "react";
import { UserOrderContext } from "../context/OrderContext";

const OrderContainer = () => {
  const { userOrders, getUserOrders } = useContext(UserOrderContext);

  useEffect(() => {
      getUserOrders();  
  }, []);

  if (!userOrders || userOrders.length === 0) { 
    return <div>No orders found.</div>;
}
  return (
    <div>
      {userOrders.map((order) => (
        <div key={order.id}>
            
          <div>
            Buyer :{order.buyerFullName}
            
            </div>
        </div>
      ))}
    </div>
  );
};

export default OrderContainer;