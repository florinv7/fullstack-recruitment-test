import React, { useEffect, useState } from "react";
import RocketCard from "../components/RocketCard";
import { Row, Col, Button, Container } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { Rocket } from "../components/RocketCard";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router";
import { set } from "mongoose";

type Props = {
  isAdmin: boolean;
};

export function parseRocket(obj: any): Rocket {
  return {
    description: obj.description,
    diameter: obj.diameter,
    height: obj.height,
    id: obj._id,
    mass: obj.mass,
    name: obj.name,
    photo: obj.photo,
  };
}

const HomeScreen = (props: Props) => {
  const [rockets, setRockets] = useState<Rocket[] | undefined>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [needUpdate, setNeedUpdate] = useState(false);

  const { isAdmin } = props;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRockets = async () => {
      const { data } = await axios.get(`/api/rockets?page=${currentPage}`);
      setRockets(data.rockets.map((r: any) => parseRocket(r)));
      setHasNext(data.hasNext);
      setNeedUpdate(false)
    };

    fetchRockets();
  }, [currentPage, needUpdate]);

  const deleteHandler = (id: string) => {
    if (window.confirm("Are you sure")) {
      axios
        .delete(`/api/rockets/${id}`)
        .then((resp) => {
          if (rockets?.length === 1 && currentPage > 1) {
            setCurrentPage(currentPage - 1);
          } else {
            setNeedUpdate(true);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const createRocketHandler = () => {
    axios
      .post(`/api/rockets`)
      .then((resp) => {
        navigate(`/admin/rocket/${resp.data._id}/edit`)
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <h1>Rockets</h1>
          </Col>
          {isAdmin && (
            <Col>
              <div className="createButton">
                <Button className="my-1" onClick={createRocketHandler}>
                  <i className="fas fa-plus"></i> Create Rocket
                </Button>
              </div>
            </Col>
          )}
        </Row>
      </Container>
      {isAdmin ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rockets &&
              rockets.map((rocket: Rocket) => (
                <tr>
                  <td>{rocket.name}</td>
                  <td>{rocket.description}</td>
                  <td>
                    <Row>
                      <Col>
                        <LinkContainer to={`/admin/rocket/${rocket.id}/edit`}>
                          <Button variant="dark" className="btn-sm">
                            Edit
                          </Button>
                        </LinkContainer>
                      </Col>
                      <Col>
                        <Button
                          variant="danger"
                          className="btn-sm"
                          onClick={() => deleteHandler(rocket.id)}
                        >
                          Delete
                        </Button>
                      </Col>
                    </Row>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      ) : (
        <Row>
          {rockets &&
            rockets.map((rocket: Rocket) => (
              <Col sm={12} md={6}>
                <RocketCard rocket={rocket}></RocketCard>
              </Col>
            ))}
        </Row>
      )}

      <Pagination>
        {currentPage > 1 && (
          <>
            <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />
            <Pagination.Item onClick={() => setCurrentPage(currentPage - 1)}>
              {currentPage - 1}
            </Pagination.Item>
          </>
        )}

        <Pagination.Item active>{currentPage}</Pagination.Item>

        {hasNext && (
          <>
            <Pagination.Item onClick={() => setCurrentPage(currentPage + 1)}>
              {currentPage + 1}
            </Pagination.Item>
            <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
          </>
        )}
      </Pagination>
    </>
  );
};

export default HomeScreen;
