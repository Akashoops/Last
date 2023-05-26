// Components/NavBar.js
import { NavLink } from 'react-router-dom';


const NavBar = () => {
 return (
 <nav>
       <ul className='d-flex justify-content-around list-unstyled my-5'>
          <li>
             <NavLink to="/">Home</NavLink>
          </li>
          <li>
             <NavLink to="/additem">additem</NavLink>
          </li>
          <li>
             <NavLink to="/login">login</NavLink>
          </li>
       </ul>
 </nav>
 );
};


export default NavBar;