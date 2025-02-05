import { NavLink, Link } from "react-router"
import vanlifeLogo from '../assets/vanlife-logo.png'

export default function Header (){

  

  return (
      <header className='navBar'>
          <div className='logo'>
            <Link to="/"><img src={vanlifeLogo}/></Link>
          </div>
          <nav>
            
            <NavLink 
              to="/host"
              className= {({ isActive })=>isActive? "active" : ""} 
            >
              Host
            </NavLink>
            
            <NavLink 
              to="/about"
              className= {({ isActive })=>isActive? "active" : ""} 
            >
              About
            </NavLink>
            
            <NavLink 
              to="/vans"
              className= {({ isActive })=>isActive? "active" : ""} 
            >
              Vans
            </NavLink>
          </nav>
      </header>
  )
}