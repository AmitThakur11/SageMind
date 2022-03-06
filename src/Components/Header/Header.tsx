import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GrGithub, GrTwitter,GrUser } from "react-icons/gr";
import { useNavigate } from "react-router";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate()
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
            <div onClick={() => setMenu(false)}>QUIZ</div>
          </Link>
          <Link to="/profile">
            <GrUser/>
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
