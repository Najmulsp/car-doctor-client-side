import { Link, useLoaderData } from "react-router-dom";
import banner from "../../public/assets/images/checkout/checkout.png";
import { FaArrowRightLong } from "react-icons/fa6";


const ServiceDetails = () => {
  const service = useLoaderData();
  // console.log(service);
  return (
    <div className="container mx-auto mt-10 h-content">
      <div className="relative w-full h-64 rounded-lg bg-gradient-to-r from-slate-950 to-gray-950 border">
        <img className="w-full h-64 opacity-70 " src={banner} alt="" />
        <h1 className="text-2xl lg:text-5xl absolute font-bold text-white text-left pt-12 lg:pt-20 top-1 left-16 lg:left-24">
          Service Details
        </h1>
        <div className="absolute w-1/3 bg-red-500 p-4 bottom-0 left-96 text-center text-white rounded-t-full">
          Home/Service Details
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-6 border">
        <div className="lg:col-span-2 col-span-1 border">
          <div className="bg-gray-900 rounded-lg">
            <img
              className="w-full h-96 rounded-lg opacity-65   border"
              src={service.img}
              alt=""
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-gray-200 rounded-xl ">
            <div className="p-8 space-y-4">
              <h1 className="text-2xl font-bold">Services</h1>
              <p className="bg-red-500 text-white p-4 flex justify-between items-center rounded-md">
                Full Car Repair
                <span>
                  <FaArrowRightLong className="text-red-500" />
                </span>
              </p>
              <p className="bg-white p-4 flex justify-between items-center rounded-md">
                Engine Repair
                <span>
                  <FaArrowRightLong className="text-red-500" />
                </span>
              </p>
              <p className="bg-white p-4 flex justify-between items-center rounded-md">
                Automatic Services
                <span>
                  <FaArrowRightLong className="text-red-500" />
                </span>
              </p>
              <p className="bg-white p-4 flex justify-between items-center rounded-md">
                Engine Oil Change
                <span>
                  <FaArrowRightLong className="text-red-500" />
                </span>
              </p>
              <p className="bg-white p-4 flex justify-between items-center rounded-md">
                Battery Charge
                <span>
                  <FaArrowRightLong className="text-red-500" />
                </span>
              </p>

              <Link to={`/checkout/${service._id}`}>
                <button className="btn bg-red-500 w-full p-4 rounded-md text-white text-center">
                  Proceed Checkout
                </button>
              </Link>
            </div>
            

            </div>
            <div className="bg-blue-950 text-white">
                <div>
                    <h1>Download</h1>
                    <div>
                        <div>
                            <h2>Our Brochure</h2>
                            <p></p>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ServiceDetails;
