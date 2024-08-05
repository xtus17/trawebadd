import React from "react";
import { Modal, Button } from "react-bootstrap";
import { db } from "../../../firebase";

export const ModalDelete = ({
  openModalDelete,
  setOpenModalDelete,
  eliminar,
}) => {
  async function deleteDataModal() {
    setOpenModalDelete(false);
    const id = eliminar.id;
    await db.collection("events").doc(id).delete();
  }

  return (
    <Modal
      className="modal"
      animation={true}
      show={openModalDelete}
      onHide={() => setOpenModalDelete(false)}
    >
      <Modal.Header>
        <Modal.Title>Eliminar</Modal.Title>
      </Modal.Header>
      <Modal.Body>Estás seguro de eliminar?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setOpenModalDelete(false)}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={deleteDataModal}>
          Borrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
