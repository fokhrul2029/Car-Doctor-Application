/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa6";

function ServiceCard({ service }) {
  const { img, title, price } = service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl ">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-end text-orange-500">
          <p className="font-bold">Price : ${price}</p>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
