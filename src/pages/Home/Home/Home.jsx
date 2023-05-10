import { useState } from "react";
import { FaMugHot } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import './Home.css'
const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div>
      <Banner />

      <div className="home-bg">
        <div className="text-center mt-[120px]">
          <h5 className="text-xl">--- Sip & Savor ---</h5>
          <h2 className="text-[#331A15] mt-2 mb-4 text-6xl font-bold drop-shadow-lg">
          Our Popular Products
          </h2>
          <Link to='/coffee/add-coffee'>
          
          <button className="bg-[#D2B48C] border border-black text-2xl rounded-md px-5 py-2 transition-all duration-500 hover:bg-transparent text-white hover:text-black">
            <p className="flex items-center gap-2">
            <span className="  font-medium">Add Coffee</span>
            <FaMugHot className="text-black"/> 
            </p>

          </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 container mx-auto p-10">
    {
      coffees.map(coffee => <CoffeeCard
      key={coffee?._id}
      coffee={coffee}
      coffees={coffees}
      setCoffees={setCoffees}
      >
      </CoffeeCard>)
    }
        </div>
      </div>

      <PhotoGallery />
    </div>
  );
};

export default Home;
