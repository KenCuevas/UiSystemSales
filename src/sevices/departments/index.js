
import axios from 'axios';
const apiURL = "https://salessystemv1.herokuapp.com/api/v1/departamentos"
    
export function GetDepartaments(){
    return axios.get(apiURL + "/all").then(res =>{
      return  res.data
    })
}
export function EditDepartaments(){
     return axios.get(apiURL + "/all").then(res =>res.data)
}

export function DeleteDepartaments(id){
 return axios.delete(apiURL + "/delete/"+id).then(res =>res.data)

}

export function AddDepartaments(json){
  console.log(json)
  return axios({
    method: 'post',
    url: `${apiURL}/add`,
    data: json}).then(res =>res.data)
  
}