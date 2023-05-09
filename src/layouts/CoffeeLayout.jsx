import { Outlet } from "react-router-dom";
import Button from "../pages/Shared/Button/Button";
import Header from "../pages/Shared/Header/Header";

const CoffeeLayout = () => {
    return (
        <div>
            <Header/>
           <div className="outlet-background">
           <Button/>
            <Outlet/>
           </div>
        </div>
    );
};

export default CoffeeLayout;