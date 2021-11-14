import AllDepartament from "hooks/departaments/allDepartments";
import { DeleteDepartaments, GetDepartaments, AddDepartaments} from "sevices/departments";
import Bradcrumb from "components/Breadcrumb";
import FindImg from "components/getImages/findImg";
import '../../App.css';
import { useRef, useState, useEffect } from "react";
import Swal from 'sweetalert2';


export default function Deparment() {
	const Dep = AllDepartament()    
    const [PROVIDER, setPROVIDER]= useState("")

    useEffect(() => {
        setPROVIDER(Dep)
    }, [Dep])
       

	let button = useRef(null);
	let name = useRef(null);
	let estado = useRef(null);
	let cerrar = useRef(null);
	
	const deleteElement=(e, id)=>{
        Swal.fire({
            title: '¿Esta seguro que desea eliminarlo?',
            text: "Esta accion no podra ser revertida!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, eliminarlo!'
          }).then((result) => {
            if (result.isConfirmed) {
                DeleteDepartaments(id).then(a=>{
                    GetDepartaments().then(res =>{
                        setPROVIDER(res)
                    })
                    Swal.fire({
                        title:  'Eliminado!',
                        text:'El registro ha sido eliminado.',
                        icon: 'success',
                        allowOutsideClick: false
                      })}
                )              
            }
          })
	}
	const openModal=(id)=>{
		console.log(id)
		button.current.click()
	}
	const addDep=(e)=>{
		e.preventDefault()
		let bool = false
		if(estado.current.isCheked){
			bool=true
		}
		if(name !==""){
			let json ={"nombre":name.current.value, "estado":bool}
			AddDepartaments(json).then(res =>{
				GetDepartaments().then(res =>{
					setPROVIDER(res)
				})
				cerrar.current.click()
			})
		}
	}
	return ( 
		<>
<button hidden type="button" data-bs-toggle="modal" data-bs-target="#modalArti" ref={button}>
</button>

<div className="modal fade" id="modalArti" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

{/* Add dep */}
<div className="modal fade" id="modalArtiAdd" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
     <form onSubmit={addDep}>
		 <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Agregar departamento</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
	  
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
    <input type="text" className="form-control" ref={name}/>
  </div>
  <div className="form-check form-switch">
	  
		<label className="form-check-label" htmlFor="flexSwitchCheckChecked">Estado</label>
		<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" ref={estado}/>
	</div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={cerrar} >Cerrar</button>
        <button type="submit" className="btn btn-primary">Agregar departamento</button>
      </div>
	 
	  </form>
    </div>
  </div>
</div>

		<Bradcrumb 
        text="Departamento"/>

<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalArtiAdd" >Agregar nuevo departamento</button>
	
    <div>
			<table className="table table-hover bg-white shadow-sm mt-3">
			<thead>
					<tr>
					<th scope="col">ID</th>
					<th scope="col">Departamento</th>
					<th scope="col">Estado</th>
					<th scope="col">Editar</th>
					<th scope="col">Eliminar</th>
					</tr>
			</thead>
			<tbody>
			{
					Object.keys(PROVIDER).map(ele=>{
					return <tr key={"prov_"+PROVIDER[ele].id}>
							<th scope="row">{PROVIDER[ele]["id"]}</th>
                            <td>{PROVIDER[ele]["nombre"]}</td>
							<td className={`${(PROVIDER[ele]["estado"])? "activo" : "inactivo"}`}>{
								(PROVIDER[ele]["estado"])? "Activo": "Inactivo"
							}</td>
							<td>
							<span onClick={(e => openModal(PROVIDER[ele]["id"]))}>
								<FindImg src="edit.png"
								alt="Edit button" className="iconBtn"/>
							</span>								
							</td>
							<td>
								<span onClick={(e => deleteElement(e, PROVIDER[ele]["id"]))}>									
							<FindImg src="remove.png"
								alt="Edit button" className="iconBtn"/>
								</span>
							</td>
					</tr>
					})
			}
			</tbody>
			</table>
			</div>
		</>
	);
}
