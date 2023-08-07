import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Shop/>}></Route>
        <Route path={"/cart"} element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
