import { Link } from "wouter";

export default function Bradcrumb({text}){
    return(
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
            <Link to="/">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">{text}</li>
        </ol>
        </nav>
    )
}