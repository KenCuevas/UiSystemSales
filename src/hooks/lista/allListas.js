import { useState , useEffect} from 'react';
import { GetListas } from 'sevices/listas';
export default function AllListas(){

    const [listas, setListas] = useState('')
  
    useEffect(function (){
        GetListas().then(res => {
        setListas(res)
      })
    },[])   
    return listas


}