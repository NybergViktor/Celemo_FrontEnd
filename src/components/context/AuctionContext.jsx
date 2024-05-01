import { createContext } from "react";

const AuctionContext = createContext();

export const AuctionProvider = ({ children, id }) => {
  const getAuction = async () => {
    let auctionId = "65f81f6866a5913190fc0dd3";

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(auctionId),
    };

    const response = await fetch(
      "http://localhost:8080/api/auction/find-one",
      options
    );

    

    return response;
  };

  // Temp function for button in Header.jsx
  const handleGetAuction = async () => {
    await getAuction("65f81f6866a5913190fc0dd3");
  };

  return (
    <AuctionContext.Provider value={{ getAuction, handleGetAuction }}>
      {children}
    </AuctionContext.Provider>
  );
};

export default AuctionContext;
