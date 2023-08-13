import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/Products/action";
import { useState } from "react";

export default function Product() {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const [isAdded, setIsAdded] = useState(false);

  const onClickHandler = (e, id) => {
    e.preventDefault();
    setIsAdded(true);
    dispatch(addCart(id));
  };



  if (products.length > 0) {
    return products.map((product) => (
      // eslint-disable-next-line react/jsx-key
      <div className="lws-productCard" id={product.id}>
        <img className="lws-productImage" src={product.image} alt="product" />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">{product.productName}</h4>
          <p className="lws-productCategory">{product.category}</p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">
              BDT <span className="lws-price">{product.price}</span>
            </p>
            <p className="productQuantity">
              QTY <span className="lws-quantity">{product.quantity}</span>
            </p>
          </div>
          <button
            className="lws-btnAddToCart"
            disabled={
              cart.find((cart) => cart.id === product.id)  ? "disabled" : ""
            }
            onClick={(e) => onClickHandler(e, product.id)}
          >
            Add To Cart
            {/* {isAdded ? "Added" : "Add To Cart"} */}
          </button>
        </div>
      </div>
    ));
  } else {
    return <p>No Product Available</p>;
  }
}
