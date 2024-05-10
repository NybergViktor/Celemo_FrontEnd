import { useState, useEffect, createContext } from "react";


const CreateAuctionContext = createContext();

const CreateAuctionProvider = ({ children }) => {
  // ================FETCH ALL ENUMS START============================

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      let res = await fetch(`${import.meta.env.VITE_API_URL}/category/find`);
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.log("err: " + err);
    }
  };
  // ================FETCH ALL ENUMS END==============================

  return (
    <CreateAuctionContext.Provider value={{ categories, setCategories }}>
      {children}
    </CreateAuctionContext.Provider>
  );
};
export { CreateAuctionContext, CreateAuctionProvider };
