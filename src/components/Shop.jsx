import { Route, Routes } from "react-router-dom";
import Addproduct from "./Addproduct";
import Navbar from "./Navbar";
import Product from "./Product";

export default function Shop() {
  return (
    <div>
      <Navbar />
      <main className="py-16">
        <div className="productWrapper">
          <div className="productContainer" id="lws-productContainer">
            <Product />
          </div>
          <Addproduct />
        </div>
      </main>
    </div>
  );
}
