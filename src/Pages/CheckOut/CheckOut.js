import React from "react";
import { useContext } from "react";
import { json, Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { img, title, _id, price } = service;
  const { user } = useContext(AuthContext);
  const handleCheckOut = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customerName: name,
      phone,
      email,
      message,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Order Placed Successfully");
          form.reset();
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="pt-4">
      <h1 className="text-3xl font-bold text-[#FF3811]">
        You are About To Order : {title}
      </h1>
      <img className="w-1/2 my-4" src={img} alt="" />
      <h4 className="text-3xl font-bold text-[#FF3811]">Order Details</h4>
      <form onSubmit={handleCheckOut} className="py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            className="input w-full input-bordered"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            className="input w-full input-bordered"
          />
          <input
            type="text"
            placeholder="Your Phone"
            name="phone"
            required
            className="input w-full input-bordered"
          />
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            className="input w-full input-bordered"
            defaultValue={user?.email}
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full mt-4"
          placeholder="Your Message"
        ></textarea>
        <div className="flex justify-end">
          <input
            className="btn bg-[#FF3811]"
            type="submit"
            value="Place Your Order"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
