import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OrderContainer from "../../components/orderContainerContent/OrderContainer";
import React from 'react'
function Order () {
    return (

      <>
        <Header />
        <div className="main">
         <OrderContainer></OrderContainer>
        </div>
        <Footer />
      </>
    );
  };
  export default Order;
  
