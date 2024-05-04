import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

/* eslint-disable react/no-unescaped-entities */
function Service() {
  const [services, setServices] = useState(null);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="py-20">
      <div className="text-center space-y-4 pb-10">
        <strong className="text-orange-500">Service </strong>
        <h1 className="text-4xl font-bold">Our Service Area</h1>
        <p className="text-gray-500  max-w-[400px] mx-auto ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
}

export default Service;
