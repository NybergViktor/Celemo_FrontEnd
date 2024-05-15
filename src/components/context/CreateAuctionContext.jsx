import { useState, useEffect, createContext } from "react";

const CreateAuctionContext = createContext();

const CreateAuctionProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    startingBid: "",
    endTime: "",
    file: null,
  });
  const handleInputDataChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputFileChange = (e) => {
    const file = e.target.files[0];
    setInputData((prevData) => ({
      ...prevData,
      file,
    }));
  };
  const saveDataToBackend = async () => {
    const { title, description, startingBid, endTime, file } = inputData;

    const auctionInputData = new FormData();
    auctionInputData.append("title", title);
    auctionInputData.append("description", description);
    auctionInputData.append("startingBid", startingBid);
    auctionInputData.append("endTime", endTime);
    auctionInputData.append("file", file);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/auction/create`,
        {
          method: "POST",
          body: auctionInputData,
        }
      );
      if (res.ok) {
        alert("The Auction was saved successfully!");
      } else {
        alert("Failed to save auction to backend");
      }
    } catch (err) {
      console.log("Error saving auction:", err);
      alert("There was an error while saving the auction.");
    }
  };

  // ================FETCH ALL ENUMS START============================
  const fetchCategories = async () => {
    try {
      let res = await fetch(`${import.meta.env.VITE_API_URL}/category/find`);
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.log("err: " + err);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  // ================FETCH ALL ENUMS END==============================

  return (
    <CreateAuctionContext.Provider
      value={{
        categories,
        setCategories,
        inputData,
        handleInputDataChange,
        handleInputFileChange,
        saveDataToBackend,
      }}
    >
      {children}
    </CreateAuctionContext.Provider>
  );
};

export { CreateAuctionContext, CreateAuctionProvider };
