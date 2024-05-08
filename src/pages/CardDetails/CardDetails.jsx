/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../contextApi/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

function CardDetails() {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `https://car-doctor-server-chi-peach.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then((res) => setBookings(res.data));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure?");
    console.log(id);
    if (proceed) {
      fetch(`https://car-doctor-server-chi-peach.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = bookings.filter((item) => item._id !== id);
            setBookings(remaining);
          }
        });
    }
  };
  const handleConfirm = (id) => {
    const data = { status: "confirmed" };
    fetch(`https://car-doctor-server-chi-peach.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((item) => item._id !== id);
          const updated = bookings.find((item) => item._id === id);
          updated.status = "confirmed";
          setBookings(remaining);
          const newBooks = [updated, ...remaining];
          setBookings(newBooks);
        }
      });
  };

  return (
    <div>
      <h1 className="text-3xl text-center py-10 rounded-lg bg-gray-200">
        Booking Details
      </h1>
      <div className="py-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Services Name & Price</th>
                <th>Customer Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((item) => (
                <BookingRow
                  key={item._id}
                  item={item}
                  handleDelete={handleDelete}
                  handleConfirm={handleConfirm}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
