import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CreateAuctionContext = createContext();

const CreateAuctionProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [celebrities, setCelebrities] = useState("");
  const [selectedCategory, SetSelectedCategory] = useState([]);
  const [selectedCelebrity, setSelectedCelebrity] = useState("");
  const [imageLink, setImageLink] = useState("");
  // const [inputCategory, setInputCategory] = useState({
  //   categoryList: categories,
  // });

  // AS FAR AS I UNDERSTAND IF I HAVE CATEGORYLIST INSIDE INPUTDATA STATE,
  // IT WILL ALWAYS BE OVERWRITTEN BY NEW UPDATED INPUT FOR TITLE< DESCRIPTION etc.
  const [inputData, setInputData] = useState({
    title: "",
    productDescription: "",
    productPhoto: "",
    celebrityName: "",
    startPrice: "",
    categoryList: selectedCategory,
    endDate: 7,
    sellerId: localStorage.getItem("loggedInUserId"),
  });

  // THOUGHTS:: either if creating seperate functions for each value state update
  // THOGUHTS:: decide creating one function for file, one for categoryList and one for all the rest input fields.
  // updates all new values to the inputData state except files and categoryList.

  const saveImageLink = () => {
    setInputData((prevData) => ({
      ...prevData,
      productPhoto: imageLink,
    }))
  }

  const setCelebrity = () => {
    setInputData((prevData) => ({
      ...prevData,
      celebrityName: selectedCelebrity,
    }))
  }

  const handleInputDataChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

   const handleInputCategoryChange = (i) => {
     // const { name, value } = e.target.value;
     const name = i.target.name;
     const value = i.target.value;
    
     SetSelectedCategory( value );
     setInputData( (prevData) => ({
      ...prevData,
      [name]: [value],
     }));
   };

  const handleInputFileChange = (e) => {
    console.log("handleInputFileChange called");
    const file = e.target.files[0];
    setInputData((prevData) => ({
      ...prevData,
      productPhoto: file,
    }));
    console.log(inputData);
  };

  useEffect(() => {
    fetchCategories();  
  }, []);

  const saveDataToBackend = async () => {

    var options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(inputData)
    };
  
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auction/create`, options );
      
      if (res.status === 200) {
        alert("The Auction was saved successfully!");
        window.location.href = "/";
      }
    } catch (error) {
      console.log("Error saving auction:", error);
      alert("Failed to create auction, make sure everything is filled in!");
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
    console.log(inputData);
  
  }, [inputData]);

  // ================FETCH ALL ENUMS END==============================

  return (
    <CreateAuctionContext.Provider
      value={{
        categories,
        setCategories,
        inputData,
        handleInputDataChange,
        handleInputFileChange,
        handleInputCategoryChange,
        saveDataToBackend,
        celebrities,
        setCelebrities,
        selectedCategory,
        setCelebrity,
        selectedCelebrity,
        setSelectedCelebrity,
        imageLink,
        setImageLink,
        saveImageLink,
        fetchCategories
      }}
    >
      {children}
    </CreateAuctionContext.Provider>
  );
};

export { CreateAuctionContext, CreateAuctionProvider };
