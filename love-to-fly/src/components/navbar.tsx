import {NavLink} from "react-router-dom"
export default function Navbar(){
    return<>
    <div className="nav-container">
    <NavLink to='/' className="logo"><img src="/images/asset 1.png"></img></NavLink>
    <div className="navbar">
        <NavLink to='/' className="nav-link">Home</NavLink>
        <NavLink to='/' className="nav-link">Destination</NavLink>
        <NavLink to='/' className="nav-link">Reservation</NavLink>
        <NavLink to='/' className="nav-link">Blogs</NavLink>
        <NavLink to='/' className="nav-link">About us</NavLink>
        <NavLink to='/' className="nav-link">Contact us</NavLink>
    </div>
    <div className="nav-btn">
    <button>Sign up</button>
    <button>Log in</button>
    </div>
    </div>
    
    </>
}