import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export function ModalAddUser(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setfullname] = useState("");
  const [phonenumber, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const toggle = () => {
    props.toggleModalCreate();
  };

  const CheckvalideInput = () => {
    let check = false ;
    if (
      fullname !== "" &&
      email !== "" &&
      password !== "" &&
      phonenumber !== "" &&
      address !== ""
    ) {
      check = true
    }
    return check ;
  };

  const handleCreate = () => {
    if(CheckvalideInput()){
      const data = {email, password,fullname,  phonenumber, address}
      props.create(data)
      setEmail("")
      setPassword("")
      setfullname("")
      setPhone("")
      setAddress("")
    }else{
      alert("Vui lòng nhập đầy đủ thông tin")
    }
  };

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        toggle={() => {
          toggle();
        }}
        size="lg"
        className="UserModal"
      >
        <ModalHeader
          toggle={() => {
            toggle();
          }}
          style={{ background: "#04aa6d" }}
        >
          Create User
        </ModalHeader>
        <ModalBody className="model-container">
          <div className="container">
            <div className="row mb-2">
              <div className="col-6 form-group">
                <label>Email :</label>
                <input
                  type="text"
                  value={email}
                  className="model-input"
                  name="email"
                  onChange={(e)=> setEmail(e.target.value)}
                ></input>
              </div>
              <div className="col-6 form-group">
                <label>Password :</label>
                <input
                  type="text"
                  value={password}
                  className="model-input"
                  name="password"
                  onChange={(e)=> setPassword(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-6 form-group">
                <label>Full Name :</label>
                <input
                  type="text"
                  value={fullname}
                  className="model-input"
                  name="fullname"
                  onChange={(e)=> setfullname(e.target.value)}
                ></input>
              </div>
       
              <div className="col-6 form-group">
                <label>Phone:</label>
                <input
                  type="text"
                  value={phonenumber}
                  className="model-input"
                  name="phonenumber"
                  onChange={(e)=> setPhone(e.target.value)}
                ></input>
              </div>
            </div>
            
            <div className="row mb-2">
              <div className="col-12 form-group">
                <label>Address :</label>
                <input
                  type="text"
                  className="model-input"
                  name="address"
                  value={address}
                  onChange={(e)=> setAddress(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="px-5"
            color="primary"
            onClick={() => {
              handleCreate();
            }}
          >
            Create User
          </Button>
          <Button
            className="px-5"
            color="secondary"
            onClick={() => {
              toggle();
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
