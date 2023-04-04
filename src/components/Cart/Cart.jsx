import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TG9uZyUyMFNsZWV2ZSUyMEdyYXBoaWMlMjBUJTIwU2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1622445275992-e7efb32d2257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8TG9uZyUyMFNsZWV2ZSUyMEdyYXBoaWMlMjBUJTIwU2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      title: "Long Sleeve Graphic T-Shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 130,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            {/* <p>{item.desc.substring(0, 100)}</p> */}
            <div className="price">1 x £{item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>£142</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
