import AllArticle from "hooks/articulos/allArticles";
import Bradcrumb from "components/Breadcrumb";
import FindImg from "components/getImages/findImg";
import '../../App.css';
import { useRef , useState, useEffect} from "react";
import Swal from 'sweetalert2';
import { GetArticulo, DeleteArticulo } from "sevices/articulos/articulo";

export default function Article() {
	const art = AllArticle()
    const [ARTICULO, setARTICULO]= useState("")

    useEffect(() => {
        setARTICULO(art)
    }, [art])

	console.log(ARTICULO)
	let button = useRef(null);
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
                DeleteArticulo(id).then(a=>{
                    GetArticulo().then(res =>{
						console.log(res)
                        setARTICULO(res)
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
		button.current.click()
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

		<Bradcrumb 
        text="Articulo"/>

<button type="button" className="btn btn-primary">Agregar nuevo articulo</button>
	
    <div>
			<table className="table table-hover bg-white shadow-sm mt-3">
			<thead>
					<tr>
					<th scope="col">ID</th>
					<th scope="col">Tipo</th>
					<th scope="col">Marca</th>
					
					<th scope="col">Medida</th>

					<th scope="col">Disponibilidad</th>

					<th scope="col">Editar</th>
					<th scope="col">Eliminar</th>
					</tr>
			</thead>
			<tbody>
			{
					Object.keys(ARTICULO).map(ele=>{
					return <tr key={"art_"+ARTICULO[ele].id}>
							<th scope="row">{ARTICULO[ele]["id"]}</th>
                            <td>{ARTICULO[ele]["description"]}</td>
							<td>{ARTICULO[ele]["brand"]}</td>
                            <td>{ARTICULO[ele]["disponibilidadArticulo"]}</td>
							<td className={`${(ARTICULO[ele]["estado"])? "activo" : "inactivo"}`}>{
								(ARTICULO[ele]["estado"])? "Activo": "Inactivo"
							}</td>
							<td>
							<span onClick={(e => openModal(ARTICULO[ele]["id"]))}>
								<FindImg src="edit.png"
								alt="Edit button" className="iconBtn"/>
							</span>								
							</td>
							<td>
								<span onClick={(e => deleteElement(e, ARTICULO[ele]["id"]))}>									
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
