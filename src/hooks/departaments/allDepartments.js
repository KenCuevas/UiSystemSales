import { useState , useEffect} from 'react';
import { GetDepartaments } from 'sevices/departments';
export default function AllDepartament(){

    const [departament, setDepartament] = useState('')
  
    useEffect(function (){
        GetDepartaments().then(res => {
            setDepartament(res)
      })
    },[])   
    return departament
}