import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const CoffeeCard = ({coffee, coffees,}) => {
    const {_id, name, taste, chef, photo} = coffee
    return (
        <div className="bg-[#F5F4F1] bg-opacity-70 p-8 flex items-center justify-between w-full rounded-md">
            <div>
                <img src={photo} alt="coffee-image" className="object-fill"/>
            </div>
            <div className="text-2xl"> 
                <p><span className="font-bold mr-2">Name:</span> {name}</p>
                <p><span className="font-bold mr-2">Chef:</span> {chef}</p>
                <p><span className="font-bold mr-2">Taste:</span> {taste}</p>
            </div>
            <div>
                <Link to={`/coffee/coffee-details/${_id}`} >
                <p className="w-10 bg-[#D2B48C] text-white p-3 rounded-md mb-4"><FaEye/></p>
                </Link>
                <Link to=''>
                <p className="w-10 bg-[#3C393B] text-white p-3 rounded-md mb-4"><FaPen/></p>
                </Link>
                <Link to=''>
                <p className="w-10 bg-[#EA4744] text-white p-3 rounded-md mb-4"><FaTrashAlt/></p>
                </Link>
                
            </div>
        </div>
    );
};

export default CoffeeCard;