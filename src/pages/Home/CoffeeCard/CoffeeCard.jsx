/* eslint-disable react/prop-types */
import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees,setCoffees }) => {
  const { _id, name, taste, chef, photo } = coffee;

  const handleDelete = (id) => {
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
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data?.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = coffees.filter(cof => cof?._id !== id)
              setCoffees(remaining)
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#F5F4F1] bg-opacity-70 p-8 md:flex items-center justify-between w-full rounded-md">
      <div>
        <img src={photo} alt="coffee-image" className="object-fill" />
      </div>
      <div className="text-2xl">
        <p>
          <span className="font-bold mr-2">Name:</span> {name}
        </p>
        <p>
          <span className="font-bold mr-2">Chef:</span> {chef}
        </p>
        <p>
          <span className="font-bold mr-2">Taste:</span> {taste}
        </p>
      </div>
      <div className="flex gap-4 mt-5">
        <Link to={`/coffee/coffee-details/${_id}`}>
          <p className="w-10 bg-[#D2B48C] text-white p-3 rounded-md mb-4">
            <FaEye />
          </p>
        </Link>
        <Link to="">
          <p className="w-10 bg-[#3C393B] text-white p-3 rounded-md mb-4">
            <FaPen />
          </p>
        </Link>
        <Link onClick={() => handleDelete(_id)}>
          <p className="w-10 bg-[#EA4744] text-white p-3 rounded-md mb-4">
            <FaTrashAlt />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CoffeeCard;
