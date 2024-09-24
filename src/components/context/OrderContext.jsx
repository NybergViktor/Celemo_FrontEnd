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
            setUserOrders(null)
        
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
            <ul>{userId}</ul>
        
            <h5>{getUserOrders.length}</h5>
            <h1>{}</h1>
        </UserOrderContext.Provider>
    );
};

const useUserOrder = () => {
    return (UserOrderContext.Provider);
   
};

export { useUserOrder , UserOrderProvider};