import "../auctionCreationContainer/PublishButton.css";
import { useContext } from "react";
import { CreateAuctionContext } from "../context/CreateAuctionContext";


const PublishButton = ({ children }) => {

const {saveDataToBackend} = useContext(CreateAuctionContext);

  return (
    <div className="publish-button-container">
      <button className="publish-button" type="button" reuse-btn="true" onClick={saveDataToBackend}>
        {children}
      </button>
    </div>
  );
};
export default PublishButton;
