import {NavLink} from "react-router-dom"
import {Wrapper, Button, Img} from "../../public/styledCmponents"
export default function Navbar(){
    return<>
    <Wrapper>
    <NavLink to='/' className="logo"><Img src="/images/asset 1.png"></Img></NavLink>
    <div className="navbar">
        <NavLink to='/' className="nav-link">Home</NavLink>
        <NavLink to='/' className="nav-link">Destination</NavLink>
        <NavLink to='/' className="nav-link">Reservation</NavLink>
        <NavLink to='/' className="nav-link">Blogs</NavLink>
        <NavLink to='/' className="nav-link">About us</NavLink>
        <NavLink to='/' className="nav-link">Contact us</NavLink>
    </div>
    <div className="nav-btn">
    <Button bg="transparent" color="rgb(11,150,251)">Sign up</Button>
    <Button bg="rgb(11,150,251)" color="#fff">Log in</Button>
    </div>
    </Wrapper>
    
    </>
}