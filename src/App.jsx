import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  let myProducts = [
    {
      img: "https://www.kfcpakistan.com/images/b438e990-bc23-11ee-be0d-ed0e61ce8a3a-Untitleddesign(5)-min_variant_0-2024-01-26082002.png",
      title: "Twister Combo",
      desc: "Twister Combo + 1 Regular fries + 1 Regular drink",
      price: 670,
      quantity: 0
    },
    {
      img: 'https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-zingerstack-Combo-2023-05-31115706.png',
      title: "Zinger Stacker Combo",
      desc: "1 Zinger Stacker + 1 Regular fries + 1 drink",
      price: 890,
      quantity: 0
    },
    {
      img: 'https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-CrispyDuoBox-2023-05-31115706.png',
      title: "Crispy Duo Box",
      desc: "Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries",
      price: 1290,
      quantity: 0
    },
    {
      img: 'https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-family-Festivle-3-2023-05-31115706.png',
      title: "Crispy Duo Box",
      desc: "An ultimate meal for the fam. It includes 4 Zinger burgers...",
      price: 2490,
      quantity:0
    },
  ];

  const [products, setProducts] = useState(myProducts);
  const [totalPrice, setTotalPrice] = useState(0);
  let [quantity, setQuantity] = useState(0);

  function handleAddToCart(index) {
    products[index].quantity += 1 ;
    setQuantity(quantity = quantity+1);
    setProducts(products);
    setTotalPrice(totalPrice + products[index].price);
  }

  return (
    <div className="container mt-5">
      <div className="account">Cart({quantity} | Rs. {totalPrice})</div>
      <div className="row myrow">
        {products.map((ele, index) => (
          <div className="col-lg-3 col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={ele.img} className="card-img-top" alt={ele.title} />
              <div className="card-body">
                <h5 className="card-title">{ele.title}</h5>
                <p className="card-text">{ele.desc}</p>
                <p className="card-text">RS {ele.price}</p>
                <a href="#" className="btn btn-primary addToCartButton" onClick={() => handleAddToCart(index)}>
                  Add to cart <span className="quantity">{ele.quantity}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// export default function App() {

//   let handleClick = (name) => {
//     alert("Hello "+ name);
//   }

//   return (
//     <div>
//       <button classNameNameName='btn btn-primary' onClick={() => handleClick("Jai Kumar")}>Click Me</button>
//     </div>
//   );
// }

// export default function App() {

//   let handleClick = () => {
//     alert("Hello JS");
//   }

//   return (
//     <div>
//       <button classNameName='btn btn-primary' onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }
//onclick='myfunction()'
// 3 changes

// export default function App() {
//   const [count, setCount] = useState(0);

//   let arr = ['first item', 'second item', 'third item', 'forth item', 'fifth item']

//   let selectedItem = arr[2];
//   return (
//     <div className="container my-5">
//         <ul classNameName="list-group list-group-flush">
//           {
//             arr.map(x => <li
//               classNameName={x === selectedItem ? 'list-group-item active': 'list-group-item'}>
//             {x}</li>)
//           }
//         </ul>
//     </div>
//   );
// }
