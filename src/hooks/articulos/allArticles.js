import { useState , useEffect} from 'react';
import { GetArticulo } from 'sevices/articulos/articulo';
export default function AllArticle(){

    const [articulo, setArticulo] = useState('')
  
    useEffect(function (){
        GetArticulo().then(res => {
            setArticulo(res)
      })
    },[])   
    return articulo


}