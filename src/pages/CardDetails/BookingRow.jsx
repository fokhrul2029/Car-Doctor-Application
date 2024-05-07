/* eslint-disable react/prop-types */
function BookingRow({ item, handleDelete, handleConfirm }) {
  const { _id, name, title, price, img, email, status } = item;
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>
        {title}
        <br />
        <span className="badge badge-ghost badge-sm text-orange-700 font-bold">
          {"$" + price}
        </span>
      </td>
      <td>{email}</td>
      <th className="space-x-2">
        {status === "confirmed" ? (
          <span className="p-2 bg-gray-200 font-bold">confirmed</span>
        ) : (
          <button
            onClick={() => handleConfirm(_id)}
            className="btn btn-info text-white"
          >
            Pending
          </button>
        )}
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-error text-white"
        >
          Delete
        </button>
      </th>
    </tr>
  );
}

export default BookingRow;
