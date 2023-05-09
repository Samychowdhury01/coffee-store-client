import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";

const CoffeeLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default CoffeeLayout;