import { Route, Routes } from "react-router-dom";
import Addproduct from "./Addproduct";
import Navbar from "./Navbar";
import Product from "./Product";

export default function Shop() {
  return (
    <div>
      {/* Navbar */}
      
      <Navbar />
     
     

      <main className="py-16">
        <div className="productWrapper">
          <div className="productContainer" id="lws-productContainer">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>

        <Addproduct/>


        </div>
      </main>
    </div>
  );
}
