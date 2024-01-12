import '../NavBar/Navbar.css'
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineFlight } from "react-icons/md";
import { IoIosFlower } from "react-icons/io";
import { IoIosBed } from "react-icons/io";
import { RiTaxiLine } from "react-icons/ri";


const Navbar = () => {
    return (
        <div>

        <nav className='nav-bar'>
           <h1 className='nav-bar-logo'><Link to='/'>Booking.com</Link></h1>
           <div className="main-menu">
            <div className='single-menu'>
            <IoIosBed />
            <NavLink to = './stay'>Stay</NavLink>
            </div>
            <div className='single-menu'>
            <MdOutlineFlight />
            <NavLink to = './flights'>Flights</NavLink>
            </div>
            <div className='single-menu'>
            <IoIosFlower />
            <NavLink to = './carrentals'>Car rentlas</NavLink>
            </div>
            <div className='single-menu'>
            <RiTaxiLine />
            <NavLink to = './attractions'>Attractions</NavLink>
            </div>
           </div>
           <div className='auth-login-signup'>
            <NavLink to='./login'>Login</NavLink>
            <NavLink to='./register'>Register</NavLink>
           </div>
        </nav>
        </div>
    );
};

export default Navbar;