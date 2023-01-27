import React from "react";
import cover from "../../assets/cover.webp";
interface ProductProps {
  image: string;
  title: string;
  price: number;
  color: string;
  text_color: string;
}

const Product: React.FC<ProductProps> = ({
  image,
  price,
  title,
  color,
  text_color,
}) => {
  return (
    <div
      className="product"
      style={{
        backgroundColor: color,
      }}
    >
      <img src={image} alt="" />
      <h4
        style={{
          color: text_color,
        }}
      >
        {title}
      </h4>
      <p>${price}</p>
      <button>Buy Now</button>
    </div>
  );
};

export default Product;
