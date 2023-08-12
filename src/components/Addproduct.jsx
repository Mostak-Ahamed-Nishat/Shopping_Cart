import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/Products/action";


export default function Addproduct() {
  const [productData, setProductData] = useState({
    productName: "",
    category: "",
    image: "",
    price: "",
    quantity: "",
  });

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addProduct(productData));
    setProductData({
      productName: "",
      category: "",
      image: "",
      price: "",
      quantity: "",
    });
  };

  

  return (
    <>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
          onSubmit={(e) => onSubmitHandler(e, productData)}
        >
          {/* product name */}
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              type="text"
              name="productName"
              value={productData.productName}
              onChange={(e) => onChangeHandler(e)}
              required
            />
          </div>
          {/* product category */}
          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              name="category"
              value={productData.category}
              onChange={(e) => onChangeHandler(e)}
              required
            />
          </div>
          {/* product image url */}
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              name="image"
              value={productData.image}
              onChange={(e) => onChangeHandler(e)}
              required
            />
          </div>
          {/* price & quantity container  */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* price  */}
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                name="price"
                value={productData.price}
                onChange={(e) => onChangeHandler(e)}
                required
              />
            </div>
            {/* quantity  */}
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                name="quantity"
                value={productData.quantity}
                onChange={(e) => onChangeHandler(e)}
                required
              />
            </div>
          </div>
          {/* submit button */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}


// export default function Addproduct() {
//   return (
//     <>
//       <div className="formContainer">
//         <h4 className="formTitle">Add New Product</h4>
//         <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
//           {/* product name */}
//           <div className="space-y-2">
//             <label htmlFor="lws-inputName">Product Name</label>
//             <input
//               className="addProductInput"
//               id="lws-inputName"
//               type="text"
//               name="productName"
//               required
//             />
//           </div>
//           {/* product category */}
//           <div className="space-y-2">
//             <label htmlFor="lws-inputCategory">Category</label>
//             <input
//               className="addProductInput"
//               id="lws-inputCategory"
//               type="text"
//               name="category"
//               required
//             />
//           </div>
//           {/* product image url */}
//           <div className="space-y-2">
//             <label htmlFor="lws-inputImage">Image Url</label>
//             <input
//               className="addProductInput"
//               id="lws-inputImage"
//               type="text"
//               name="image"
//               required
//             />
//           </div>
//           {/* price & quantity container  */}
//           <div className="grid grid-cols-2 gap-8 pb-4">
//             {/* price  */}
//             <div className="space-y-2">
//               <label htmlFor="ws-inputPrice">Price</label>
//               <input
//                 className="addProductInput"
//                 type="number"
//                 id="lws-inputPrice"
//                 name="price"

//                 required
//               />
//             </div>
//             {/* quantity  */}
//             <div className="space-y-2">
//               <label htmlFor="lws-inputQuantity">Quantity</label>
//               <input
//                 className="addProductInput"
//                 type="number"
//                 id="lws-inputQuantity"
//                 name="quantity"
//                 required
//               />
//             </div>
//           </div>
//           {/* submit button */}
//           <button type="submit" id="lws-inputSubmit" className="submit">
//             Add Product
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

