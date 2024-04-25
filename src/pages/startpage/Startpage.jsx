import "./Startpage.css";
import Footer from "../../components/footer/Footer";
import SubHeader from "../../components/sub-header/SubHeader";
import Header from "../../components/header/Header";
import Auction from "../../components/auctionStartPage/AuctionSP";

const Startpage = () => {
  return (
    <div className="startpage">
      <Header></Header>
      <SubHeader></SubHeader>
      <Auction></Auction>
      <Footer></Footer>
    </div>
  );
};

export default Startpage;
