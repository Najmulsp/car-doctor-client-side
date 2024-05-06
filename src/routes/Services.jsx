import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Services = () => {
  const [services, setServices] = useState([]);
    // console.log(services)

  useEffect(() => {
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data));
  }, []);
  return (
    <div className="mt-10 border">
      <div className="text-center space-y-4">
        <h2 className="text-orange-600 font-bold">Services</h2>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p className="">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      {/* card section */}
      <div className=" container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            services.map(service => <Link
            to={`/serviceDetails/${service._id}`}
            key={service._id}
             className="card mx-auto w-96 bg-base-100 shadow-xl hover:scale-[1.05] transition-all">
            <figure className="px-10 pt-10">
              <img src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-left text-left">
              <h2 className="card-title pl-2">{service.title}</h2>
              <div className="w-full flex justify-end items-center px-2">
              <p className="text-orange-600 font-bold">Price: {service.price}</p>
              <FaArrowRightLong className="text-orange-600"/>
              </div>
            </div>
          </Link>)
        }
      </div>
      <div className="text-center mt-4">
        <button className="border-2 border-orange-600  text-orange-500 font-bold btn mx-auto">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
