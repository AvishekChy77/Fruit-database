import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";


const Root = () => {
    return (
        <div className="flex flex-col gap-10">
            <Navbar/>
            <div className="mx-5">
            <div className="container mx-auto text-center">
            <Outlet/>
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;