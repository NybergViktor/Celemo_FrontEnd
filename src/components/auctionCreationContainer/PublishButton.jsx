import "../auctionCreationContainer/PublishButton.css";

const PublishButton = ({ children }) => {
  return (
    <div className="publish-button-container">
      <button className="publish-button" type="button" reuse-btn="true">
        {children}
      </button>
    </div>
  );
};
export default PublishButton;
