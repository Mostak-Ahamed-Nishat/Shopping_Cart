/* eslint-disable react/jsx-key */

import { useDispatch, useSelector } from "react-redux";
import {
  decrementProductQuantity,
  incrementProductQuantity,
  removeItemFormCart,
} from "../redux/Products/action";

export default function CartItem() {
  const cartItem = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const onClickIncrement = (e, id, value) => {
    e.preventDefault();
    dispatch(incrementProductQuantity({ id, value }));
  };

  const onClickDecrement = (e, id, value) => {
    e.preventDefault();
    dispatch(decrementProductQuantity({ id, value }));
  };

  const onClickRemoveHandler = (e, id) => {
    console.log("CLicking");
    e.preventDefault();
    dispatch(removeItemFormCart(id));
  };

  return cartItem.map((item, index) => {
    if (item.totalQuantity > 0)
      return (
        <div id={item.id}>
          {/* Cart Item  */}
          <div className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">
              {/* cart image  */}
              <img className="lws-cartImage" src={item.image} alt="product" />
              {/* cart item info  */}
              <div className="space-y-2">
                <h4 className="lws-cartName">{item.productName}</h4>
                <p className="lws-cartCategory">{item.category}</p>
                <p>
                  BDT <span className="lws-cartPrice">{item.price}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
              {/* amount buttons */}
              <div className="flex items-center space-x-4">
                <button className="lws-incrementQuantity">
                  <i
                    className="text-lg fa-solid fa-plus"
                    onClick={(e) => onClickIncrement(e, item.id, 1)}
                  ></i>
                </button>
                <span className="lws-cartQuantity">{item.totalQuantity}</span>
                <button className="lws-decrementQuantity">
                  <i
                    className="text-lg fa-solid fa-minus"
                    onClick={(e) => onClickDecrement(e, item.id, 1)}
                  ></i>
                </button>
              </div>
              {/* price */}
              <p className="text-lg font-bold">
                BDT{" "}
                <span className="lws-calculatedPrice">
                  {item.totalQuantity * item.price}
                </span>
              </p>
            </div>
            {/* delete button */}
            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
              <button className="lws-removeFromCart">
                <i
                  className="text-lg text-red-400 fa-solid fa-trash"
                  onClick={(e) => onClickRemoveHandler(e, item.id)}
                ></i>
              </button>
            </div>
          </div>
          {/* Cart Items Ends */}
        </div>
      );
    else return <div></div>;
  });
}
