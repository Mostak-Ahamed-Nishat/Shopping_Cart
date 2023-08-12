import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      {/* Navbar  */}
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <Link to="/">
            <img
              src="./images/logo.png"
              alt="LWS"
              className="max-w-[60px] max-h-[60px]"
            />
          </Link>
          <div className="flex gap-4">
            <Link to="/" className="navHome" id="lws-home">
              Home
            </Link>
            <Link to="/cart" className="navCart" id="lws-cart">
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">{cart.length}</span>
            </Link>
          </div>
        </div>
      </nav>
      {/* Navbar  End*/}
    </>
  );
}
