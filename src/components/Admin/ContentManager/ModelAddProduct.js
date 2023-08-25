import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export function ModalAddProduct(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [image, setImage] = useState("");
  const [desciption, setDesciption] = useState("");

  const toggle = () => {
    props.toggleModalCreate();
  };

  const CheckvalideInput = () => {
    let check = false;
    if (
      title !== "" &&
      price !== "" &&
      discount !== "" &&
      image !== "" &&
      desciption !== ""
    ) {
      check = true;
    }
    return check;
  };

  const handleCreate = () => {
    if (CheckvalideInput()) {
      const data = { title, price, discount, image, desciption };
      props.create(data);
      setTitle("")
      setPrice("")
      setDiscount("")
      setImage("")
      setDesciption("")
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
          style={{ background: "#04aa6d" }}
        >
          Create Product
        </ModalHeader>
        <ModalBody className="model-container">
          <div className="container">
            <div className="row mb-2">
              <div className="col-6 form-group">
                <label htmlFor="title">Title :</label>
                <input
                  type="text"
                  value={title}
                  className="model-input"
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </div>
              <div className="col-6 form-group">
                <label htmlFor="price">Price :</label>
                <input
                  type="text"
                  value={price}
                  className="model-input"
                  name="price"
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-6 form-group">
                <label htmlFor="discount">Discount :</label>
                <input
                  type="text"
                  value={discount}
                  className="model-input"
                  name="discount"
                  onChange={(e) => setDiscount(e.target.value)}
                ></input>
              </div>

              <div className="col-6 form-group">
                <label htmlFor="image">Image :</label>
                <input
                  type="text"
                  value={image}
                  className="model-input"
                  name="image"
                  onChange={(e) => setImage(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-12 form-group">
                <label htmlFor="desciption">Desciption :</label>
                <input
                  type="text"
                  className="model-input"
                  name="desciption"
                  value={desciption}
                  onChange={(e) => setDesciption(e.target.value)}
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
            Create 
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
