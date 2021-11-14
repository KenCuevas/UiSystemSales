
import axios from 'axios';

export function GetArticulo(){
    const apiURL = "https://salessystemv1.herokuapp.com/api/v1/articles"
    return axios.get(apiURL + "/all").then(res =>{
      return  res.data
    })
}

export function EditArticulo(id){
    console.log(id)
    const apiURL = "https://salessystemv1.herokuapp.com/api/v1/articles"

    return axios.post(apiURL + "/update/"+id).then(res =>res.data)

}

export function DeleteArticulo(id){
  console.log(id)
  const apiURL = "https://salessystemv1.herokuapp.com/api/v1/articles"

  return axios.delete(apiURL + "/delete/"+id).then(res =>res.data)

}