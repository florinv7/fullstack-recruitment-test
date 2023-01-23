import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { Rocket } from '../components/RocketCard'
import axios from 'axios'
import "./screens.css"
import { parseRocket } from './HomeScreen'

type Props = {}

const RocketScreen = (props : Props ) => {

  const { id } = useParams();
  const [rocket, setRocket] = useState<Rocket | undefined>(undefined)

  useEffect(() => {
    const fetchRocket = async () => {
      const { data } = await axios.get(`/api/rockets/${id}`)

      setRocket(parseRocket(data))
    }

    fetchRocket()
  }, [id])

  return (
    <>
        <Link className='btn btn-dark my-3' to="/">
          Go back
        </Link>
        {rocket !== undefined ?
        <Row>
          <Col md={6}>
            <Image src={rocket.photo} alt={rocket.name} className="rocketImage"></Image>
          </Col>
          <Col md={6}>
            <ListGroup variant='flush'> 
              <ListGroup.Item>
                <h3>{rocket.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                Description : {rocket.description}
              </ListGroup.Item>
              <ListGroup.Item>
                Diameter : {rocket.diameter} m
              </ListGroup.Item>
              <ListGroup.Item>
                Height : {rocket.height} m
              </ListGroup.Item>
              <ListGroup.Item>
                Mass : {rocket.mass} kg
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row> : 
        <div>Not found</div>
        }
    </>
  )
}

export default RocketScreen