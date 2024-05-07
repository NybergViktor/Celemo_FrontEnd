
import AuctionSelectionDropdowns from "../../components/auctionCreationContainer/AuctionSelectionDropdowns";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "../create-auction-page/CreateAuctionPage.css"




function CreateAuctionPage() {
    
    return (
        <div className="auction-page-container">
            <Header />
            <AuctionSelectionDropdowns />
            <Footer />
        </div>
    );
};

export default CreateAuctionPage;