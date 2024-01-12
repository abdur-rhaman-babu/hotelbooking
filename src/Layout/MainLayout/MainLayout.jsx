import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/NavBar/Navbar";
import './MainLayout.css'
const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="outlet-area">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;