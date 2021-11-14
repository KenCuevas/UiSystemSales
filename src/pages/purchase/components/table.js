
import AllListas from "hooks/lista/allListas";

export default function Table(){
    
   const ALLISTAS = AllListas()
    return(
        <>
        <div className="mt-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
<span>Solicitudes de compras</span>
    
    
      <form className="d-flex ">
      <div className="">        
        <select className="form-select" aria-label="form-select" defaultValue="Todos">
        <option value="Todos">Todos</option>
        <option value="id">ID</option>
        <option value="2">Numero de orden</option>
        <option value="3">Fecha</option>
        <option value="3">Valor</option>
        </select>
    </div>
    <div className="col-auto d-flex ms-2"> 
        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
        </div>
      </form>
  </div>
</nav>
        <div>
        <table className="table table-hover bg-white shadow-sm">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Numero de la orden</th>
            <th scope="col">Fecha de compra</th>
            <th scope="col">Valor monetario</th>
            </tr>
        </thead>
        <tbody>
        {
            Object.keys(ALLISTAS).map(ele=>{
             return <tr key={"comp_"+ALLISTAS[ele].id}>
                <th scope="row">{ALLISTAS[ele]["id"]}</th>
                <td>{ALLISTAS[ele]["numeroOrden"]}</td>
                <td>{ALLISTAS[ele]["fecha"]}</td>
                <td>{ALLISTAS[ele]["costo_unitario"]}</td>
            </tr>
            })
        }
        </tbody>
        </table>
        </div>
    </div>
        </>
    )
}