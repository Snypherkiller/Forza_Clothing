import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar({ navLinks, version, icon, userId }) {
  const location = useLocation();
  const path = location.pathname;

  if(!version) {
    version = "0.0.0v"
  }

  if(!icon){
    icon = ""
  }

  return (
    <div class="nav">
      <div class="nav-container">
        <div class="nav__logo-container">
          <div class="nav__logo">{icon}</div>
        </div>
        <div class="nav__name">
          <div class="nav__name-details">Finance Genie</div>
          <div class="nav__name-version">{version}</div>
        </div>
      </div>
      <div class="nav__wrapper">
        <ul class="nav-links">
          {navLinks.map((link, index) => (
            <Link className="link" to={link.path[0]}>
              <li key={index} className={`nav-link ${link.path.indexOf(path) !== -1 ? "selected" : ""}`} title={link.title}>

                <span className="nav-link__icon material-symbols-outlined-fill"> {link.icon}</span>
                <span className="nav-link__text">
                  {link.title}
                </span>

              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div class="nav-container">
        <div class="nav__profile-image-container">
          <div class="nav__profile-image"></div>
        </div>
        <div class="nav__profile">
          <div class="nav__profile-details">John Doe</div>
          <Link to="/auth/logout">
            <div class="nav__logout material-symbols-outlined-fill">
              logout
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;