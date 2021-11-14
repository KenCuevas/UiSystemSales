import Menu from "components/menu";
import e from './style.module.css'
import Navbar from "components/navbar";
import { Route } from "wouter";
import Dashboard from "./dashboard";
import Article from "./articles";
import Deparment from "./department";
import Purchases from "./purchase";
import NewPurchase from "./purchase/newPurchase";
import Providers from "./provider";
import Medidas from "./measurement";
import { useState } from "react";

export default function Main () {
    const [hide, setHide]= useState(false)
   const handleClick=()=>{
        setHide(!hide)
    }
    return ( 
        <>
        <main className="row container-fluid m-0 p-0">
                {/* Menu */}
                {
                     (hide)?
                    <section className={`col-2 p-0 ${e.verticalMenu}`}>
                        <Menu/>                
                    </section>
                     : null
                }
                

               <section className={`${e.optionsConta} col-10 p-0 ${(!hide)? "col-12":null}`}>
                <div className={`d-flex ${e.navContainer}`}>
                    <div className="ms-3">
                    <div className={`${e["nav-icon1"]} ${(hide)? e.open:null}`} onClick={handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    </div>
                    <Navbar/>
                </div>
                    {/* Other components */}
                <div className="m-3">
                    <Route component={Dashboard} path="/" />
                    <Route component={Article} path="/articulos" />
                    <Route component={Providers} path="/proveedores"/>
                    <Route component={Deparment} path="/departamentos"/>
                    <Route component={Purchases} path="/compras" />
                    <Route component={NewPurchase} path="/nueva%20compra"/>
                    <Route component={Medidas} path="/medidas"/>
                </div>                
               </section>
        </main>
        </>
     );
}

