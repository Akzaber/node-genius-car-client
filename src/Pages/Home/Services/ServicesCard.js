import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="font-bold text-[#FF3811]">${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-primary">CheckOut</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
