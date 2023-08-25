
import Axios from "axios";

let err = "";
let url = "http://localhost:6789/";
const handleLoginAPI = async (data) => {
  await Axios.post(url+"login", data).then((response) => {
    err = response.data;
  });
  return err;
};

const serviceGetUser = (idInput) => {
  return Axios.get( url+`getUser?id=${idInput}`);
};

const seviceCreateUser = (data) => {
  return Axios.post(url+"createUser", data);
};

const seviceDeleteUser = (idUser) => {
  return Axios.delete(url+"deleteUser", {
    data : {id : idUser}
  });
};
const seviceEditUser =  (inputdata) => {
  return  Axios.put(url+"editUser", inputdata);
};


export { handleLoginAPI, serviceGetUser, seviceCreateUser,seviceDeleteUser ,seviceEditUser};
