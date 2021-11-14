import Table from "pages/purchase/components/table";
import Bradcrumb from "components/Breadcrumb";
export default function Purchases(){

    return(
        <>
        <Bradcrumb 
        text="Solicitudes de compras"
        />
        <Table/>
        </>
    )
}