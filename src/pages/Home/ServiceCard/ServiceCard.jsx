/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  const { _id, img, title, price } = service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl ">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-end text-orange-500">
          <p className="font-bold">Price : ${price}</p>
          <Link to={`/checkout/${_id}`}>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
