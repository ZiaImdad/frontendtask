import React from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductSection from "./components/ProductSection";
import Slider from "./components/Slider";
import Slider2 from "./components/Slider2";
import BottomBanner from "./components/BottomBanner";
import LogosSection from "./components/LogosSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      <Banner />
      <ProductSection />
      <Slider/>
      <Slider2/>
      <BottomBanner/>
      <LogosSection/>
      <Footer/>
    </div>
  );
};

export default App;
