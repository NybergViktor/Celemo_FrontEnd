import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CreateAuctionContext = createContext();

const CreateAuctionProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [celebrities, setCelebrities] = useState("");
  const [inputCategory, setInputCategory] = useState({
    categoryList: categories,
  });

  // AS FAR AS I UNDERSTAND IF I HAVE CATEGORYLIST INSIDE INPUTDATA STATE,
  // IT WILL ALWAYS BE OVERWRITTEN BY NEW UPDATED INPUT FOR TITLE< DESCRIPTION etc.
  const [inputData, setInputData] = useState({
    title: "",
    productDescription: "",
    productPhoto: null,
    celebrityName: "john holmes",
    startPrice: "",
    endDate: 7,
    sellerId: localStorage.getItem("loggedInUserId"),
  });

  // THOUGHTS:: either if creating seperate functions for each value state update
  // THOGUHTS:: decide creating one function for file, one for categoryList and one for all the rest input fields.
  // updates all new values to the inputData state except files and categoryList.

  const handleInputDataChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

   const handleInputCategoryChange = (i) => {
     // const { name, value } = e.target.value;
     const { name, value } = i.target;
     setInputCategory((prevData) => ({
       ...prevData,
       categoryList: value,
     }));
     console.log(inputCategory);
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

  const saveDataToBackend = async () => {
    // Convert the file property to a base64-encoded string
    const file = inputData.productPhoto;
    const fileString = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = function (event) {
        console.error("Error reading file:", event.target.error);
      };
      reader.readAsDataURL(file);
    });

    const modifiedInputData = {
      ...inputData,
      ...inputCategory,
      productPhoto: fileString,
      categoryList: inputCategory.categoryList,
    };

    console.log(modifiedInputData);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auction/create`,
        modifiedInputData
      );
      console.log(modifiedInputData);
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
    console.log(inputData);
    console.log(inputCategory);
  }, [inputData, inputCategory]);

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
        inputCategory,
        setInputCategory,
      }}
    >
      {children}
    </CreateAuctionContext.Provider>
  );
};

export { CreateAuctionContext, CreateAuctionProvider };

// const handleInputDataChange = (e) => {
//   preventDefault();
//   const { name, value } = e.target;
//   // Update the categoryList field separately
//   if (name === 'categoryList') {
//     setInputData((prevData) => ({
//       ...prevData,
//       categoryList: value,
//     }));
//   } else {
//     setInputData((prevData) => ({
//       ...prevData,
//       [name]: prevData[name] !== undefined ? value : prevData[name],
//     }));
//   }
// };
// const handleInputDataChange = (e) => {
//   const { name, value } = e.target;
//     setInputData((prevData) => ({
//       ...prevData,
//       [name]: name === 'categoryList' ? value : prevData[name],
//       // [name]: value,
//     }));
//   };
