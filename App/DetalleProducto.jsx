import React from "react";
import { Link, useParams } from "react-router-dom";
import Producto from "./model/Producto";

const DetalleProducto = () => {
  let { id } = useParams();
  let producto = new Producto(
    "Galletas",
    1200,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY4b9eJCmYZ4chulO1UNpctmZgPDDjKPTl68gSGTSI9CL2UrVmbq84nUketw&usqp=CAc"
  );

  return (
    <div className="container-lg px-16 py-5">
        <Link to="/Productos">Volver</Link>
      <div className="font-bold text-lg m-5">{producto.nombre}</div>
      <img
        style={{ width: "200px", height: "200px", objectFit: "scale-down" }}
        src={producto.portada}
      ></img>
      <p></p>
    </div>
  );
};

export default DetalleProducto;
