import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import banner from "../../public/assets/images/checkout/checkout.png";
import Swal from "sweetalert2";
import axios from "axios";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  // console.log(orders)
  

  const url = `http://localhost:5000/orders?email=${user?.email}`;

  useEffect(() => {
    axios.get(url, {withCredentials: true})
    .then(res =>{
      setOrders(res.data)

    })
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setOrders(data);
    //   });
  }, [url]);


    // delete a orders
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/orders/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = orders.filter(order => order._id !== _id);
              setOrders(remaining)
            
          });
      }
    });
      // aprove order
  //   const confirmedOrder = id => {
  //     fetch(`http://localhost:5000/orders/${id}`, {
  //         method: 'PUT',
  //         headers:{'content-type' : 'application/json'},
  //         body:JSON.stringify({status: "confirm"})
  //     })
  //     .then(res => res.json())
  //     .then(data => {
  //         console.log(data)
  //         if(data.modifiedCount > 0){
  //             Swal.fire({
  //                 title: 'success!',
  //                 text: 'Your order updated successfully',
  //                 icon: 'success',
  //                 confirmButtonText: 'Cool'
  //               })

  //               const remaining = orders.filter(order => order._id !== id);
  //               const updated = orders.find(order => order._id === id);
  //               updated.status = "confirm";
  //               const newOrders = [updated, ...remaining]
  //               setOrders(newOrders)

  //         }
          
  //     })
  // }
}
  return (
    <div className="container mx-auto mt-10">
      <div className="relative w-full h-64 rounded-lg bg-gradient-to-r from-slate-950 to-gray-950 border">
        <img className="w-full h-64 opacity-70 " src={banner} alt="" />
        <h1 className="text-2xl lg:text-5xl absolute font-bold text-white text-left pt-12 lg:pt-20 top-1 left-16 lg:left-24">
          Cart Details
        </h1>
        <div className="absolute w-1/3 bg-red-500 p-4 bottom-0 left-96 text-center text-white rounded-t-full">
          Home - Product Details
        </div>
      </div>

      <div className="container mt-10">
        <h1>{orders.length}</h1>
        <table className="w-full border border-red-800">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Servicing Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="w-full">
            {orders.map((order) => <tr className="border ml-10" key={order._id}>
        <th>
        <button onClick={() => handleDelete(order._id)} className="btn btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td className="border">
          <div className="flex items-center justify-around gap-3">
            <div className="avatar">
              <div className="rounded lg w-24 h-24">
                <img src={order.img} className="w-20 h-20"/>
              </div>
            </div>
            <div>
              <div className="font-bold">{order.customerName}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td className="border ml-20">
          {order.price}
        </td>
        <td className="ml-20">{order.servicing_date}</td>
        <th>
          {
            order.status === "confirm"?<span className="font-bold text-primary">Confirmed</span>:
          <button onClick={() => confirmedOrder(order._id)} className="btn bg-red-500 text-white ">Pending</button>
          }
        </th>
      </tr>)}
            
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Continue Shopping</th>
              <th></th>
              <th>Clear Shopping Cart</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Orders;
