import React, { useContext, useEffect } from "react";
import { UserOrderContext } from "../context/OrderContext";
import './OrderContainer.css'

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
        <div key={order.id} >
          <div>
             <div className="reviewOrder">
                <div className="">Buyer :{order.buyerFullName}</div>
                <div className="">sellerFullName: {order.sellerFullName}</div>
                <div className="">productTitle {order.productTitle}</div>
                <div className="">endPrice {order.endPrice}</div>
                <div className="">commission {order.commission}</div>
                <div className="">createdDate {order.createdDate}</div>
             </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderContainer;