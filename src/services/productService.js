import Axios from "axios";

let url = "http://localhost:6789/"
export const serviceGetProduct = (nameTitle) => {
  return Axios.get(url+`getProduct?title=${nameTitle}`);
};

export const seviceDeleteProduct = (titleName) => {
  return Axios.delete(url+"deleteProduct", {
    data: { title: titleName },
  });
};

export const seviceCreateProduct = (data) => {
  return Axios.post(url+"createProduct", data);
};

export const serviceEditProduct = (inputdata) => {
  return Axios.put(url+"editProduct", inputdata);
};
