
import axios from 'axios';
const apiURL = "https://salessystemv1.herokuapp.com/api/v1/unidades"
    
export function GetMedidas(){
    return axios.get(apiURL + "/all").then(res =>{
      return  res.data
    })
}

export function EditMedidas(){
    return axios.get(apiURL + "/all").then(res =>res.data)

}

export function DeleteMedidas(id){
  return axios.delete(apiURL + "/delete/"+id).then(res =>res.data)

}