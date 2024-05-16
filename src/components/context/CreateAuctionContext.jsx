import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CreateAuctionContext = createContext();

const CreateAuctionProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    startingBid: "",
    endTime: "",
    productPhotot: null,
    // file: { name: "default_file_name", type: "image/jpeg" },
  });
  // const [selectedFile, setSelectedFile] = useState();

  const handleInputDataChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputFileChange = (e) => {
    console.log('handleInputFileChange called');
    const file = e.target.files[0];
    setInputData((prevData) => ({
      ...prevData,
      productPhotot: file
    }));
    console.log(inputData);
  };
  
  const saveDataToBackend = async (inputData) => {
    // Convert the file property to a base64-encoded string
    const fileString = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      FileReader.onerror = function (event) {
        console.error("Error reading file:", event.target.error);
      };
      reader.readAsDataURL(file);
    });

    // Modify the inputData object
    file = fileString;

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auction/create`,
        inputData
      );
      if (res.ok) {
        alert("The Auction was saved successfully!");
      } else {
        alert("Failed to save auction to backend");
      }
    } catch (error) {
      console.log("Error saving auction:", error);
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
        // selectedFile,
        // setSelectedFile,
      }}
    >
      {children}
    </CreateAuctionContext.Provider>
  );
};

export { CreateAuctionContext, CreateAuctionProvider };

// const { title, description, startingBid, endTime, file } = inputData;

// const auctionInputData = new FormData();
// auctionInputData.append("title", title);
// auctionInputData.append("description", description);
// auctionInputData.append("startingBid", startingBid);
// auctionInputData.append("endTime", endTime);
// auctionInputData.append("file", file);

// const res = await fetch(
//   `${import.meta.env.VITE_API_URL}/auction/create`, inputData,
//   {
//     method: "POST",
//     body: auctionInputData,
//   }
// );
