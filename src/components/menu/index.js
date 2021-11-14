import { Link , useLocation} from "wouter";
import  e from"./style.module.css";
import FindImg from "components/getImages/findImg";
import { systemOptions } from "utils/systemOptions";

export default function Menu() {
  const path = useLocation()
  return (
    <>
      <div className={` d-flex justify-content-center ${e.menuVert}`}>
       {/*<nav className="navbar navbar-expand navbar-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown"> */}
          <ul className="navbar-nav flex-column d-flex justify-content-center">
              {
                Object.keys(systemOptions).map(option=>(
                  <li className={`nav-item py-3 border-bottom ${
                    (path[0] === systemOptions[option]["url"])? e.active :null
                  }`} 
                  key={"opt_"+option}>
                    <Link to={systemOptions[option]["url"]} className={e.links}>
                        <FindImg
                        src={systemOptions[option]["img"]}
                        alt={`${systemOptions[option]["description"]} button icon`}
                        className={e.icon}
                        />
                        <small>{systemOptions[option]["description"]}</small>
                    </Link>
                  </li>
                ))
              }
            </ul>
          {/* </div> 
        </div>
      </nav>*/}
      </div>
    </>
  );
}
