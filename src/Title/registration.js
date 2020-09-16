import React, { useState } from "react";
import Modal from "react-modal";
import Form from "react-bootstrap/Form";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export default function Registration() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="text_center" style={{ color: "white" }}>
      <button type="button" class="btn btn-warning" onClick={openModal}>
        Đăng ký
      </button>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>close</button>
          <center style={{fontSize:20,fontWeight:'bold',padding:10,color:'#17a2b8'}}>Đăng ký tài khoản</center>
          <Form.Group>
            <Form.Control id="1" type="email" placeholder="Email của bạn" />
          </Form.Group>
          <Form.Group>
            <Form.Control id="2" type = 'password' placeholder="Mật khẩu" />
          </Form.Group>
          <Form.Group>
            <Form.Control id="3" type = 'password' placeholder="Nhập lại mật khẩu" />
          </Form.Group>
          <button type="button" class="btn btn-primary  btn-block">Đăng ký</button>
        </Modal>
      </div>
    </div>
  );
}
