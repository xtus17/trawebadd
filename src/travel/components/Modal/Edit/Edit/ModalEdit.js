import React, { useEffect, useState } from "react";
import { Modal, Stack, Button, Form, Row } from "react-bootstrap";
import { editData } from "./editData";

export const ModalEdit = ({ isModalEditar, setIsModalEditar, editar }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const descripcion = document.getElementById("descripcion").value;
    const category = document.getElementById("category").value;

    const infoData = {
      descripcion,
      category,
    };

    setIsModalEditar(false);
    const id = editar.id;
    editData({ infoData, id });
  };

  const [getData, setGetData] = useState([]);

  const getDataEdit = (editar) => {
    setGetData(editar);
  };

  useEffect(() => {
    getDataEdit(editar);
  }, [editar]);

  return (
    <div>
      <Modal show={isModalEditar} onHide={() => setIsModalEditar(false)}>
        <Modal.Header>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Row />
                <Form.Select
                  id="category"
                  aria-label="select"
                  required="aria-required"
                  className="mb-2"
                  value={getData.category}
                  onChange={(e) =>
                    setGetData({
                      ...getData,
                      category: e.target.value,
                    })
                  }
                >
                  <option value="">Selecciona la categoría</option>
                  <option value="Sitios Naturales">Sitios Naturales</option>
                  <option value="Monumentos Históricos">
                    Monumentos Históricos
                  </option>
                  <option value="Museos y Galerías de Arte">
                    Museos y Galerías de Arte
                  </option>
                  <option value="Eventos y Festivales">
                    Eventos y Festivales
                  </option>
                  <option value="Parques Temáticos y de Atracciones">
                    Parques Temáticos y de Atracciones
                  </option>
                  <option value="Sitios Religiosos">Sitios Religiosos</option>
                  <option value="Playas">Playas</option>
                  <option value="Manifestaciones Culturales">
                    Manifestaciones Culturales
                  </option>
                  <option value="Folklore">Folklore</option>
                  <option value="Servicios">Servicios</option>
                  <option value="Medio de Transporte">
                    Medio de Transporte
                  </option>
                </Form.Select>
              </Form.Group>

              <Form.Group>
                <Row />
                <Form.Control
                  required
                  id="descripcion"
                  placeholder="Descripción"
                  type="text"
                  className="mb-2"
                  value={getData.descripcion}
                  onChange={(e) =>
                    setGetData({
                      ...getData,
                      descripcion: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Modal.Footer>
                <Button
                  className="md-3"
                  variant="secondary"
                  onClick={() => setIsModalEditar(false)}
                >
                  Cancelar
                </Button>
                <Button
                  className="text-center mt-4 mb-4"
                  variant="primary"
                  type="submit"
                >
                  Editar
                </Button>
              </Modal.Footer>
            </Form>
          </Stack>
        </Modal.Body>
      </Modal>
    </div>
  );
};
