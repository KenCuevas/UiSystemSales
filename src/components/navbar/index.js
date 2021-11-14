import FindImg from "components/getImages/findImg";
import e from "./style.module.css";

export default function Navbar(){
    return(
        <>
        <nav className={`navbar navbar-expand navbar-light container-fluid m-0  ${e.navMenu}`}>
          <div className="container-fluid row p-0">
            <div className="col-10 d-flex ms-2">
              <FindImg
                src="logo.png"
                alt="Logo sistema de compras"
                className={e.logo}/> 
              <p className={`${e.logo_text} m-0`}>                
                Sistema de compras</p>
                <p className={`ms-2 m-0 ${e.logo_text_p}`}>Admin Dashboard</p>
            </div>
            <div className="col-2 d-flex justify-content-end">
              <div className={e.login}>
              <FindImg src={"user.png"} alt={"user logo icon login button"}
            className={e.login_icon}/>
                <small  className={e.login_text}>Login</small>
              </div>
            </div>
          </div>
        </nav>
        </>
    )
}