import FindImg from "components/getImages/findImg";
import e from "../style.module.css"
import { useLocation } from "wouter";

export default function Card({action, url, desc, className, pathUrl}) {
    const [, goPath]= useLocation()
    const handleClick =()=>{
        goPath(pathUrl)
    }
    return ( 
        <>
        <div className="col-2 p-2">
            <div className={`shadow-sm ${e.card}`}
            onClick={handleClick}>
                <div className="card-body">
                    <div>
                       <FindImg src={url} alt={desc} className={className} /> 
                    </div>                    
                    <p className={e.card_text}>{action}</p>
                </div>
            </div>            
        </div>
        </>
     );
}
 