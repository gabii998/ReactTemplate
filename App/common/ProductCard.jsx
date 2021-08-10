import React from "react";

const ProductCard = (props) => {
  return (
    <div className="bg-white py-5 mx-3 rounded cursor-pointer font-medium w-40 h-48 hover:border-gray-300 border-2 duration-200 border-white">
      <img
        style={{ width: "100%", height: "70%", objectFit: "scale-down" }}
        src={props.src}
      ></img>
      <div className="p-4 pt-2">
        <div className="text-gray-500 font-light">{props.nombre}</div>
        <div>${props.precioVenta}</div>
      </div>
    </div>
  );
};
export default ProductCard;
