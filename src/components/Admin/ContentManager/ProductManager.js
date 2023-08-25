import { useState } from "react";
import { seviceDeleteProduct , seviceCreateProduct , serviceEditProduct} from "../../../services/productService";
import "../admin.scss";
import { ModalAddProduct } from "./ModelAddProduct";
import {ModalEditProduct} from "./ModelEditProduct"

function ProductManager({list, getDataToSate}) {
  const [statusModalCreate, setModalCreate] = useState(false);
  const [satusModalEdit, setModalEdit] = useState(false);
  const [productEdit, setProductEdit] = useState({});

  let handleDelete = async (product) => {
    try {
      if (product.title) {
        let res = await seviceDeleteProduct(product.title);
        if (res.data.errCode === "0") {
          getDataToSate();
          alert("Delete Product " + product.title + " success !!");
        } else {
          alert(res.data.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  let handleCreate = async (data) => {
    let res = await seviceCreateProduct(data);
    
    if (res.data.message === "Ok") {
      alert("User created successfully");
      getDataToSate();
      handleToogleFormAddProduct();
    } else {
      alert(`${res.data.message}`);
    }
  };
  
  let handleToogleFormAddProduct = () => {
    setModalCreate(!statusModalCreate);
  };

  let handleToogleFormEditProduct = () => {
    setModalEdit(!satusModalEdit);
  };

  let handleLoadCurentUser = (product) => {
    setProductEdit(product)
    handleToogleFormEditProduct()
  };
  
  let handleEdit = async (data) => {
    try {
      let res = await serviceEditProduct(data);
      console.log(res);
      if (res.data.errMessage === "Ok") {
             getDataToSate();
             handleToogleFormEditProduct();
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
       <ModalAddProduct
          isOpen={statusModalCreate}
          toggleModalCreate={setModalCreate}
          create={handleCreate}
        />
        <ModalEditProduct
             isOpen={satusModalEdit}
             toggleModalEdit={handleToogleFormEditProduct}
             currentProduct={productEdit}
             handleEdit={handleEdit}
        ></ModalEditProduct>
      <div className="mt-5">
        <button onClick={()=>handleToogleFormAddProduct()} className="btn btn-primary mx-5 px-5">
          <i className="fas fa-plus"></i> Add Product
        </button>
      </div>
      <div className="soluong">Số lượng sản phẩm : {list.length}</div>
      <div className="users-table mt-5 mx-5" >
        <table id="customers">
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Image</th>
            <th>Desciption</th>
            <th>ACTION</th>
          </tr>
          {list.map((product, index) => {
            return (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.discount}</td>
                <td>{product.image}</td>
                <td>{product.desciption}</td>
                <td className="btn-actions">
                  <button onClick={()=>{handleLoadCurentUser(product)}} className="btn-edit">
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                  <button onClick={()=>{handleDelete(product)}} className="btn-delete">
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default ProductManager;
