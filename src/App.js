import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from './pages/mainpage/mainpage'
import Header from './pages/header/header'
import Footer from './pages/footer/footer'
import CartDetail from "./pages/cart_detail/cart_deatil"
import ShrimpSociety from "./pages/shrimp_society/shrimp_society"
import CategoryItems from "./pages/Categoy/CategoryItems";
import FavouriteItems from "./pages/FavouriteItems/FavouriteItems"
import CategoryDetail from "./pages/Categoy/CategoryDetail";
import MyItems from "./pages/MyItems/MyItems";
import DescribeItem from "./pages/DescribeItem/DescribeItem";
import PriceItem from "./pages/ControlNFT/PriceItem/PriceItem";
import PriceSuccess from "./pages/ControlNFT/PriceItem/PriceSuccess";
import CreateNFT from "./pages/ControlNFT/CreateNFT/CreateNFT";
import CreateSuccess from "./pages/ControlNFT/CreateNFT/CreateSuccess";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/CartDetail" element={<CartDetail />} />
          <Route path="/ShrimpSociety" element={<ShrimpSociety />} />
          <Route path="/CategoryItems" element={<CategoryItems />} />
          <Route path="/FavouriteItems" element={<FavouriteItems />} />
          <Route path="/CategoryDetail" element={<CategoryDetail />} />
          <Route path="/MyItems" element={<MyItems />} />
          <Route path="/DescribeItem" element={<DescribeItem />} />
          <Route path="/PriceItem" element={<PriceItem />} />
          <Route path="/PriceSuccess" element={<PriceSuccess />} />
          <Route path="/CreateNFT" element={<CreateNFT />} />
          <Route path="/CreateSuccess" element={<CreateSuccess />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
