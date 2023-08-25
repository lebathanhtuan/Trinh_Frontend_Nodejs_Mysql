import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export function ModalEditProduct(props) {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (props.currentProduct) {
      // take data form props productManager
      const { id, title, discount, image, price, description } =
        props.currentProduct;
      setId(id);
      setTitle(title);
      setPrice(price);
      setDiscount(discount);
      setImage(image);
      setDescription(description);
    }
  }, [props.currentProduct]);

  const toggle = () => {
    props.toggleModalEdit();
  };

  const CheckvalideInput = () => {
    let check = false;
    if (
      id !== "" &&
      title !== "" &&
      price !== "" &&
      image !== "" &&
      description !== "" &&
      discount !== ""
    ) {
      check = true;
    }
    return check;
  };

  const handleEdit = () => {
    const data = {
      id,
      title,
      price,
      image,
      description,
      discount,
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
          Edit Product
        </ModalHeader>
        <ModalBody className="model-container">
          <div className="container">
            <div className="row mb-2">
              <div className="col-12 form-group">
                <label htmlFor="title">Title :</label>
                <input
                  type="text"
                  value={title}
                  className="model-input"
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row mb-2">
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
              <div className="col-6 form-group">
                <label htmlFor="discount">Discount:</label>
                <input
                  type="text"
                  value={discount}
                  className="model-input"
                  name="discount"
                  onChange={(e) => setDiscount(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-12 form-group">
                <label htmlFor="image">Image :</label>
                <input
                  type="text"
                  className="model-input"
                  name="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
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
