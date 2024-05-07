/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../contextApi/AuthProvider";
import BookingRow from "./BookingRow";

function CardDetails() {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:3000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
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
                <BookingRow key={item._id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
