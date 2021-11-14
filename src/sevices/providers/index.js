
import axios from 'axios';
const apiURL = "https://salessystemv1.herokuapp.com/api/v1/proveedores"
    
export function GetProviders(){
    return axios.get(apiURL + "/all").then(res =>{
      return  res.data
    })
}

export function EditProviders(){
   return axios.get(apiURL + "/all").then(res =>res.data)

}

export function DeleteProviders(id){
 return axios.delete(apiURL + "/delete/"+id).then(res =>res.data)

}
export function AddProviders(json){
  console.log(json)
  return axios({
    method: 'post',
    url: `${apiURL}/add`,
    data: json}).then(res => res.data)
}