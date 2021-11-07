import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GrGithub, GrTwitter } from "react-icons/gr";
const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <section className="navbar">
      <header>
        <div className="menu">
          <i
            onClick={() => setMenu(!menu)}
            className={menu ? `fa fa-close` : `fa fa-reorder`}
          ></i>
        </div>
        <div className="logo">
          <img src="https://i.ibb.co/cFjKjRQ/003-ninja.png" alt="logo" />
          <Link to="/">
            <div className="name">
              <div className="first">SAGE</div>
              <div className="last">MIND</div>
            </div>
          </Link>
        </div>
        <div
          className={menu ? `header-options active ` : `header-options off `}
        >
          <div className="sidebar-logo">
            <img src="https://i.ibb.co/cFjKjRQ/003-ninja.png" alt="logo" />
            <div className="name">
              <div className="first">SAGE</div>
              <div className="last">MIND</div>
            </div>
          </div>
          <Link to="/">
            <div>QUIZ</div>
          </Link>
          
            <a href ="https://github.com/AmitThakur11">
              <GrGithub />
              </a>
            
         
          
            <a href="https://twitter.com/_amit__thakur">
              <GrTwitter  />
            </a>
          
          {/* <Link to="/login"><div  className="login-btn">{authState.login ? `Log out` : `Log in`}</div></Link> */}
        </div>
      </header>
    </section>
  );
};

export default Header;
