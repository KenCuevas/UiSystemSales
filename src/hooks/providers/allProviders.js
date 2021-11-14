import { useState , useEffect} from 'react';
import { GetProviders } from 'sevices/providers';
export default function AllProviders(){

    const [providers, setProviders] = useState('')
  
    useEffect(function (){
        GetProviders().then(res => {
            setProviders(res)
      })
    },[])   
    return providers


}