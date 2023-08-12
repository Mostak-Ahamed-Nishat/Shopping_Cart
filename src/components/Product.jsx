import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/Products/action";
import {  useState } from "react";

export default function Product() {
  const products = useSelector((state) => state.products);
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
          <p className="lws-productCategory"> Product ID:{product.id}</p>
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
            // disabled={isAdded ? "disabled" : ""}
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

// export default function Product() {

//     return  (
//       // eslint-disable-next-line react/jsx-key
//       <div className="lws-productCard">
//         <img className="lws-productImage" src="https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=704&q=80" alt="product" />
//         <div className="p-4 space-y-2">
//           <h4 className="lws-productName">Show</h4>
//           <p className="lws-productCategory">Life Style</p>
//           <div className="flex items-center justify-between pb-2">
//             <p className="productPrice">
//               BDT <span className="lws-price">120</span>
//             </p>
//             <p className="productQuantity">
//               QTY <span className="lws-quantity">4</span>
//             </p>
//           </div>
//           <button
//             className="lws-btnAddToCart"
//           >
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     )
//   }
