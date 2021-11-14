import AllMedidas from "hooks/medidas/allMedidas";
import Bradcrumb from "components/Breadcrumb";
import FindImg from "components/getImages/findImg";
import '../../App.css';
import { useRef , useState, useEffect} from "react";
import Swal from 'sweetalert2';
import { GetMedidas, DeleteMedidas } from "sevices/medidas";

function Medidas() {
	const med = AllMedidas()
    const [MEDIDAS, setMEDIDAS]= useState("")

    useEffect(() => {
        setMEDIDAS(med)
    }, [med])


	let button = useRef(null);
	const deleteElement=(e, id)=>{
		console.log(id)
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
                DeleteMedidas(id).then(a=>{
                    GetMedidas().then(res =>{
						console.log(res)
                        setMEDIDAS(res)
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
	return ( 
		<>
<button hidden type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalMedida" ref={button}>
  Launch demo modal
</button>

<div className="modal fade" id="modalMedida" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

		<Bradcrumb 
        text="Medidas"/>

<button type="button" className="btn btn-primary">Agregar nueva medida</button>
	
    <div>
			<table className="table table-hover bg-white shadow-sm mt-3">
			<thead>
					<tr>
					<th scope="col">ID</th>
					<th scope="col" >Tipo</th>
					<th scope="col">Estado</th>
					<th scope="col">Editar</th>
					<th scope="col">Eliminar</th>
					</tr>
			</thead>
			<tbody>
			{
					Object.keys(MEDIDAS).map(ele=>{
					return <tr key={"comp_"+MEDIDAS[ele].id}>
							<th scope="row">{MEDIDAS[ele]["id"]}</th>
							<td>{MEDIDAS[ele]["descripcion"]}</td>
							<td className={`${(MEDIDAS[ele]["estado"])? "activo" : "inactivo"}`}>{
								(MEDIDAS[ele]["estado"])? "Activo": "Inactivo"
							}</td>
							<td>
							<span onClick={(e => openModal(MEDIDAS[ele]["id"]))}>
								<FindImg src="edit.png"
								alt="Edit button" className="iconBtn"/>
							</span>								
							</td>
							<td>
								<span onClick={(e => deleteElement(e, MEDIDAS[ele]["id"]))}>									
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

export default Medidas;