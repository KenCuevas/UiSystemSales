
import axios from 'axios';
const apiURL = "https://salessystemv1.herokuapp.com/api/v1/compras"
   
export function GetListas(){
     return axios.get(apiURL + "/all").then(res =>{
      return  res.data
    })
}

export function EditListas(){
   return axios.get(apiURL + "/all").then(res =>res.data)

}