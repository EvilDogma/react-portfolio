import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.svg"
function Header() {
    return (
        <div className="container py-4">

            <div className="row align-items-center">
                <div className="col-6">
                <img className="logo" src={logo} alt="" />
                </div>
                <nav className="col-6 d-flex justify-content-end">

                    <NavLink className='mx-2' to="/">Home</NavLink>
                    <NavLink className='mx-2' to="/about">About</NavLink>
                    <NavLink className='mx-2' to="/contact">Contact</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Header