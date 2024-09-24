import React, { useEffect } from "react";
import { useUserOrder } from "../context/OrderContext";
import Order from "../../pages/orderpage/Order";

const OrderContainer = ({userId}) => {
    
  const { userOrders, getUserOrders } = useUserOrder();
  

  useEffect(() => {
    if (userOrders) {
      getUserOrders();  
    }
  }, []);

  if (!userOrders || userOrders.length === 0) { 
  
    return <div>No orders found.{userId}</div>;
   }
  return (
    <div>
      {userOrders.map((order) => (
        <div key={order.id}>
            {userId}
          <div>buyerId :{buyerFullName}</div>
        </div>
      ))}
    </div>
  );
};

export default OrderContainer;