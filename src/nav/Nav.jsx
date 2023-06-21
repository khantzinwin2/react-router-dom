import "./nav.css"
import {Link, NavLink} from "react-router-dom"

const Nav = () => {
  return (
    <div className="nav-container">
        <ul>
            <li>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/About'}>About</NavLink>
            </li>
            <li>
                <NavLink to={'/Services'}>Services</NavLink>
            </li>
            <li>
                <NavLink to={'/Contact'}>Contact</NavLink>
            </li>
            <li>
                <NavLink to={'/admin'}>Admin</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Nav