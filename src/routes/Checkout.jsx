import { useLoaderData } from "react-router-dom";
import banner from "../../public/assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
  const service = useLoaderData();
  const {user} = useContext(AuthContext);
  const {title, _id, price, img} = service;

  const addOrder = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const date = e.target.date.value;
    const text = e.target.text.value;
    const order = {
        customerName : name,
        email,
        phone,
        servicing_date : date,
        opinion : text,
        title,
        order_id : _id,
        price,
        img
    }
    console.log(order)

    fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your order has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
  }


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

      <div className="bg-slate-200 mt-10 p-14 rounded-lg">
        <form onSubmit={addOrder} className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="username" className="text-sm">
              Username
            </label>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              placeholder="Username"
              className="w-full rounded-md p-3"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="website" className="text-sm">
              Date
            </label>
            <input
              name="date"
              type="date"
              placeholder=""
              className="w-full rounded-md p-3 "
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="website" className="text-sm">
            Your Phone
            </label>
            <input
              name="phone"
              type="number"
              placeholder="Your Phone"
              className="w-full rounded-md p-3 "
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="website" className="text-sm">
            Your Email
            </label>
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              placeholder="Your Email"
              className="w-full rounded-md p-3 "
            />
          </div>
          <div className="col-span-full">
            <textarea
              name="text"
              placeholder="Your Message"
              className="w-full rounded-md textarea-lg"
            ></textarea>
          </div>
          <div className="col-span-full">
            <button className="bg-red-500 rounded-md w-full py-3 text-white btn">Order Confirm</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Checkout;
