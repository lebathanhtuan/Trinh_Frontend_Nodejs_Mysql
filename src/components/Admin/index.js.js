import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./admin.scss";
import UserManager from "./ContentManager/UserManager";
import { serviceGetUser } from "../../services/userService";
import { serviceGetProduct } from "../../services/productService";
import ProductManager from "./ContentManager/ProductManager";


const Admin = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [listUsers,setListUser] = useState([]);
  const [listProduct , setListProduct] = useState([]);

  useEffect(() => {
    getDataToSateListUsers();
    getDataToSateListProduct();
  }, []);

  let getDataToSateListUsers = async () => {
    let response = await serviceGetUser("All");
    if (response && response.data.errCode === 0) {
      setListUser(response.data.users);
    }
  };

  let getDataToSateListProduct = async () => {
    let response = await serviceGetProduct("All");
    if (response && response.data.errCode === 0) {
      setListProduct(response.data.products);
    }
  };


  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Header activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === "users" ? (
        <UserManager list={listUsers} getDataToSate={getDataToSateListUsers}></UserManager>
      ) : (
        <ProductManager list={listProduct} getDataToSate={getDataToSateListProduct}></ProductManager>)}
    </div>
  );
};

export default Admin;
