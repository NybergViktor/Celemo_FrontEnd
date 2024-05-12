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

  // ================fetch API NINJAS START ==========================
  // const [celebrity, setCelebrity] = useState("");

  // const celebrityInput = (promptMessage) => {
  //   return prompt(promptMessage)
  // }
  // const celebrityInput = document.getElementById('celebrityInput');
  // const input = celebrityInput.value;
  // const celebrityName = input;










  

    let name = "michael jacksson"
    let options = {
      method: "GET",
      headers: { "x-api-key": "EVXs0Tdo4GvAQnEzNgwfEg==pXAm2A6bA2zNwHFl" },
    };

    let url = "https://api.api-ninjas.com/v1/celebrity?name=" + celebrityName;

    fetch(url, options)
      .then((res) => res.json()) // parse response as JSON
      .then((data) => {
        
        console.log(data);
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });









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

  return (
    <CreateAuctionContext.Provider value={{ categories, setCategories }}>
      {children}
    </CreateAuctionContext.Provider>
  );
};
export { CreateAuctionContext, CreateAuctionProvider };
