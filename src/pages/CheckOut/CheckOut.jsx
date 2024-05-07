import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contextApi/AuthProvider";

function CheckOut() {
  const { user } = useContext(AuthContext);

  const service = useLoaderData();

  const { _id, title, price, img } = service;

  const [name, setName] = useState(user?.displayName);
  const [email, setEmail] = useState(user?.email);
  const [date, setDate] = useState(null);
  const [amount, setAmount] = useState(price);

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      name,
      title,
      img,
      email,
      date,
      price: amount,
      service_id: _id,
    };
    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1>service Name: {title}</h1>
      <div className="text-3xl text-center py-10 rounded-lg bg-gray-300">
        this is Check Out Page
      </div>
      <form
        onSubmit={handleSubmit}
        className="card-body bg-gray-300 p-10 my-10 rounded-lg"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              className="input input-bordered"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-error text-white">Confirm Order</button>
        </div>
      </form>
    </div>
  );
}

export default CheckOut;
