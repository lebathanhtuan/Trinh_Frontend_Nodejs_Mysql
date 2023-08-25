import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export function ModalEditUser(props) {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullname] = useState("");
  const [phonenumber, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (props.currentUser) {
      // take data form props usermanage
      const { id, fullname, email, phone_number, address ,password} =
        props.currentUser;
      setId(id);
      setEmail(email);
      setFullname(fullname)
      setPhone(phone_number);
      setAddress(address);
    }
  }, [props.currentUser]);

  const toggle = () => {
    props.toggleModalEdit();
  };

  const CheckvalideInput = () => {
    let check = false;
    if (
      fullName !== "" &&
      email !== "" &&
      phonenumber !== "" &&
      address !== ""
    ) {
      check = true;
    }
    return check;
  };

  const handleEdit = () => {
    const data = {
      id,
      email,
      fullName,
      phonenumber,
      address,
    };
    if (CheckvalideInput()) {
      props.handleEdit(data);
    } else {
      alert("Vui lòng nhập đầy đủ thông tin");
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
          style={{ background: "orange" }}
        >
          Edit User
        </ModalHeader>
        <ModalBody className="model-container">
          <div className="container">
            <div className="row mb-2">
              <div className="col-12 form-group">
                <label>Email :</label>
                <input
                  type="text"
                  value={email}
                  className="model-input"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-6 form-group">
                <label>Full Name :</label>
                <input
                  type="text"
                  value={fullName}
                  className="model-input"
                  name="fullName"
                  onChange={(e) => setFullname(e.target.value)}
                ></input>
              </div>
              <div className="col-6 form-group">
                <label>Phone:</label>
                <input
                  type="text"
                  value={phonenumber}
                  className="model-input"
                  name="phonenumber"
                  onChange={(e) => setPhone(e.target.value)}
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
                  onChange={(e) => setAddress(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="px-5"
            color="warning"
            onClick={() => {
              handleEdit();
            }}
          >
            Edit
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
