import { useLoaderData } from "react-router-dom";


const CoffeeDetails = () => {
const coffeeDetails = useLoaderData()
const {name, taste, photo, supplier, chef, category, details} = coffeeDetails
    return (
        <div className="md:container md:mx-auto flex flex-col md:flex-row justify-center items-center md:w-1/2 gap-32 p-10 mx-5 bg-[#F4F3F0] rounded-md">
            
            <img src={photo} alt="" />
            <div className="text-2xl">
                <p><span className="font-semibold">Name:</span> {name}</p>
                <p><span className="font-semibold">Chef:</span> {chef}</p>
                <p><span className="font-semibold">Supplier:</span> {supplier}</p>
                <p><span className="font-semibold">Taste</span> {taste}</p>
                <p><span className="font-semibold">Category</span> {category}</p>
                <p><span className="font-semibold">Details</span> {details}</p>
            </div>
            
        </div>
    );
};

export default CoffeeDetails;