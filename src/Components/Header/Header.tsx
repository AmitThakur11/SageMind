import "./Header.css";
import {useState} from "react"

const Header = () => {
  const [menu , setMenu] = useState(false)
  return (
    <section className ="navbar">
      <header>
        <div className="menu">
          <i onClick={()=>setMenu(!menu)} className={menu ? `fa fa-close` : `fa fa-reorder`}></i>
        </div>
        <div className="logo">
          <img src="https://i.ibb.co/cFjKjRQ/003-ninja.png"alt ="logo"/>
          <div className ="name">
            <div className="first">SAGE</div>
            <div className="last">MIND</div>
        </div>
        </div>
        <div className= {menu ? `header-options active ` : `header-options off ` } >
          <div className="sidebar-logo">
          <img src="https://i.ibb.co/cFjKjRQ/003-ninja.png"alt ="logo"/>
          <div className ="name">
            <div className="first">SAGE</div>
            <div className="last">MIND</div>
        </div>
          </div>
          <div>PROFILE</div>
          <div>LEADERBOARD</div>
          <div>ABOUT</div>
          <div className="login-btn">LOG IN</div>
          
        </div>
      </header>
    </section>
  );
};

export default Header;
