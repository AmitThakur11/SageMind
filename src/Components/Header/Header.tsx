import "./Header.css";
import {useState} from "react"
import {Link} from "react-router-dom"
import { useAuth } from "../../Context/AuthContext";
const Header = () => {

  const {authState} = useAuth()
  const [menu , setMenu] = useState(false)
  return (
    <section className ="navbar">
      <header>
        <div className="menu">
          <i onClick={()=>setMenu(!menu)} className={menu ? `fa fa-close` : `fa fa-reorder`}></i>
        </div>
        <div className="logo">
         <img src="https://i.ibb.co/cFjKjRQ/003-ninja.png"alt ="logo"/>
          <Link to="/">
          <div className ="name">
            <div className="first">SAGE</div>
            <div className="last">MIND</div>
        </div>
        </Link>
        </div>
        <div className= {menu ? `header-options active ` : `header-options off ` } >
          <div className="sidebar-logo">
          <img src="https://i.ibb.co/cFjKjRQ/003-ninja.png"alt ="logo"/>
          <div className ="name">
            <div className="first">SAGE</div>
            <div className="last">MIND</div>
        </div>
          </div>
          <Link to ="/profile"><div>PROFILE</div></Link>
          <Link to ="/leaderboard"><div>LEADERBOARD</div></Link>
          <Link to ="/about"><div>ABOUT</div></Link>
          <Link to="/login"><div  className="login-btn">{authState.login ? `Log out` : `Log in`}</div></Link>
          
        </div>
      </header>
    </section>
  );
};

export default Header;
