import { createContext, useEffect, useState, useContext } from "react";
import Order from "../../pages/orderpage/Order";


const UserOrderContext = createContext();

const UserOrderProvider = ({ children }) => {
    const [userOrders, setUserOrders] = useState([]); 
    const [buyerId, setbuyerId] = useState([]); 
    const [auctionId, setauctionId] = useState([]); 
   

    const userId = localStorage.getItem("loggedInUserId");


    const getUserOrders = async () => {
        var options = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
        };

        try {
            let res = await fetch(
                `${import.meta.env.VITE_API_URL}/order/find/user-orders/${userId}`,
                options
              );
            const data = await res.json();
           setUserOrders(data)
        } catch (err) {
            console.error("Error fetching user orders:", err);
        }
    };
    
    return (
        <UserOrderContext.Provider
            value={{
                userOrders,
                getUserOrders   
            }}
        >    
            {children}
        </UserOrderContext.Provider>
    );
};


export { UserOrderContext , UserOrderProvider};