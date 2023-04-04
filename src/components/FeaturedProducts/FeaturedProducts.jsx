import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TG9uZyUyMFNsZWV2ZSUyMEdyYXBoaWMlMjBUJTIwU2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1622445275992-e7efb32d2257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8TG9uZyUyMFNsZWV2ZSUyMEdyYXBoaWMlMjBUJTIwU2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      title: "Long Sleeve Graphic T-Shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 1,
      img: "https://plus.unsplash.com/premium_photo-1658527016912-de4b9e570ef9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2tpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      //img2: "",
      title: "Skirt",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGF0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      //img2: "",
      title: "Hat",
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
