import { useState, useEffect, createContext } from "react";

const CreateAuctionContext = createContext();

const CreateAuctionProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

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

  // ================fetch API NINJAS START ==========================

  return (
    <CreateAuctionContext.Provider
      value={{ categories, setCategories }}
    >
      {children}
    </CreateAuctionContext.Provider>
  );
};
export { CreateAuctionContext, CreateAuctionProvider };





// THINGS TO BRING BACK IN CODE =================

// searchTerm, setSearchTerm











// var name = 'Michael Jordan'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/celebrity?name=' + name,
//     headers: { 'X-Api-Key': 'AIzaSyBXHNglsyPG90KJQzfiMGpS68TcXE6jtsY'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

//  const fetchCelebrity = async () => {

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//     let options = {
//       method: "GET",
//       headers: { "x-api-key": "EVXs0Tdo4GvAQnEzNgwfEg==pXAm2A6bA2zNwHFl" },
//     };

//     let url = "https://api.api-ninjas.com/v1/celebrity?name=" + name;

//     try {
//       let res = await fetch(url, options);
//       const data = await res.json();
//       console.log(data); // Log the fetched data
//     } catch (err) {
//       console.log(`error ${err}`);
//     }
//   };

//   // Fetch the celebrity data based on the search term
//    useEffect(() => {
//      fetchCelebrity(searchTerm);
//    }, [searchTerm]);

// let name = "michael jordan";
// let options = {
//   method: "GET",
//   headers: { "x-api-key": "EVXs0Tdo4GvAQnEzNgwfEg==pXAm2A6bA2zNwHFl" },
// };

// let url = "https://api.api-ninjas.com/v1/celebrity?name=" + name;

// fetch(url, options)
//   .then((res) => res.json()) // parse response as JSON
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(`error ${err}`);
//   });
