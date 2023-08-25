import { useEffect, useState } from "react";
import "../admin.scss";
import {
  seviceCreateUser,
  seviceDeleteUser,
  seviceEditUser,
} from "../../../services/userService";
import { ModalAddUser } from "./ModelAddUser";
import { ModalEditUser } from "./ModelEditUser";

function UserManager({list , getDataToSate}) {
  const [statusModalCreate, setModalCreate] = useState(false);
  const [satusModalEdit, setModalEdit] = useState(false);
  const [userEdit, setUserEdit] = useState({});



  let handleToogleFormAddUser = () => {
    setModalCreate(!statusModalCreate);
  };

  let handleToogleFormEditUser = () => {
    setModalEdit(!satusModalEdit);
  };

  let handleLoadCurentUser = (user) => {
    setUserEdit(user)
    handleToogleFormEditUser()
  };

  let handleCreate = async (data) => {
    let res = await seviceCreateUser(data);

    if (res.data.message === "Ok") {
      alert("User created successfully");
      getDataToSate();
      handleToogleFormAddUser();
    } else {
      alert(`${res.data.message}`);
    }
  };
  
  let handleDelete = async (user) => {
    try {
      if (user.id) {
        let res = await seviceDeleteUser(user.id);
        if (res.data.errCode === "0") {
          getDataToSate();
          alert("Delete user" + user.email + " success !!");
        } else {
          alert(res.data.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };



  let handleEdit = async (data) => {
    try {
      let res = await seviceEditUser(data);
      console.log(res);
      if (res.data.errMessage === "Ok") {
             getDataToSate();
             handleToogleFormEditUser();
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="containerUser">
      <div className="mt-5">
        <ModalAddUser
          isOpen={statusModalCreate}
          toggleModalCreate={setModalCreate}
          create={handleCreate}
        />
        <ModalEditUser
          isOpen={satusModalEdit}
          toggleModalEdit={handleToogleFormEditUser}
          currentUser={userEdit}
          handleEdit={handleEdit}
        />
        <button
          onClick={() => handleToogleFormAddUser()}
          className="btn btn-primary mx-5 px-5"
        >
          <i className="fas fa-plus"></i> Add New Users
        </button>
      </div>
      <div className="soluong">Số lượng người dùng : {list.length}</div>

      <div className="users-table mt-5 mx-5">
        <table id="customers">
          <tr>
            <th>Email</th>
            <th>Full Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>ACTION</th>
          </tr>
          {list.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>{user.fullname}</td>
                <td>{user.phone_number}</td>
                <td>{user.address}</td>
                <td className="btn-actions">
                  <button
                    onClick={() => handleLoadCurentUser(user)}
                    className="btn-edit"
                  >
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn-delete"
                  >
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

export default UserManager;
