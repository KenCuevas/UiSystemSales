import { useState , useEffect} from 'react';
import { GetMedidas } from 'sevices/medidas';
export default function AllMedidas(){

    const [medidas, setMedidas] = useState('')
  
    useEffect(function (){
        GetMedidas().then(res => {
            setMedidas(res)
      })
    },[])   
    return medidas
}