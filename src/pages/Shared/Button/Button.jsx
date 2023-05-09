import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


const Button = () => {
    return (
        <div className="container mx-auto mt-12">
            <Link to='/' className="flex items-center text-2xl  hover:bg-[#D2B48C] w-40 duration-500 rounded-md p-3">

            <FaArrowLeft className="mr-2"/> <span>Back to home</span>
            </Link>
        </div>
    );
};

export default Button;