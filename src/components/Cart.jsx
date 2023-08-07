import Bill from "./Bill";
import CartItem from "./CartItem";
import Navbar from "./Navbar";

export default function Cart() {
  return (
    <div>
        <Navbar/>
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            <CartItem />
          </div>
          <div>
            <Bill/>
          </div>
        </div>
      </div>
    </div>
  );
}
