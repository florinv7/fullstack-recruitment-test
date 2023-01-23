import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Row, Col, Button, Form, Container, Modal } from 'react-bootstrap'
import { Rocket } from '../components/RocketCard'
import axios from 'axios'
import "./screens.css"
import { parseRocket } from './HomeScreen'

type Props = {}

const RocketEditScreen = (props : Props ) => {

  const { id } = useParams();

  const navigate = useNavigate();
  
  const [rocket, setRocket] = useState<Rocket | undefined>(undefined)
  const [photo, setPhoto] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [height, setHeight] = useState(0)
  const [diameter, setDiameter] = useState(0)
  const [mass, setMass] = useState(0)
  const [error, setError] = useState<undefined | any>(undefined)

  useEffect(() => {
    const fetchRocket = async () => {
     axios.get(`/api/rockets/${id}`).then(resp => {
      try {
        const parsedRocket : Rocket = parseRocket(resp.data)
        setPhoto(parsedRocket.photo)
        setName(parsedRocket.name)
        setDescription(parsedRocket.description)
        setHeight(parsedRocket.height)
        setDiameter(parsedRocket.diameter)
        setMass(parsedRocket.mass)
        setRocket(parsedRocket)
      } catch (err) {
        setError(err)
      }
     }).catch(err => {
      setError(err)
     })
      
    }

    fetchRocket()
  }, [id])

  const submitHandler = (e : any) => {
    e.preventDefault()
    if(rocket){
      const updatedRocket : Rocket = {
        id: rocket.id,
        description: description,
        name: name,
        diameter: +diameter,
        height: +height,
        mass: +mass,
        photo: photo
      }
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      axios.put(
        `/api/rockets/${id}`,
        updatedRocket,
        config
      ).then(resp => {
        navigate("/")
      }).catch(err => {
        setError(err)
      })
    }
    
  }

  return (
    <>
        <Link className='btn btn-dark my-3' to="/">
          Go back
        </Link>
        {error === undefined ?
        <Container>
        <Row className='justify-content-md-center'>
          <Col xs={12} md={6}>
          <h1>Edit Rocket</h1>
       
       <Form onSubmit={submitHandler}>
         <Form.Group controlId='name'>
           <Form.Label>Name</Form.Label>
           <Form.Control
             type='name'
             placeholder='Enter name'
             value={name}
             onChange={(e) => setName(e.target.value)}
           ></Form.Control>
         </Form.Group>

         <Form.Group controlId='description'>
           <Form.Label>Description</Form.Label>
           <Form.Control
             type='text'
             placeholder='Enter description'
             value={description}
             onChange={(e) => setDescription(e.target.value)}
           ></Form.Control>
         </Form.Group>

         <Form.Group controlId='photo'>
           <Form.Label>Photo</Form.Label>
           <Form.Control
             type='photo'
             placeholder='Enter image url'
             value={photo}
             onChange={(e) => setPhoto(e.target.value)}
           ></Form.Control>
         </Form.Group>

         <Form.Group controlId='height'>
           <Form.Label>Height</Form.Label>
           <Form.Control
             type='number'
             placeholder='Enter height'
             value={height}
             onChange={(e) => setHeight(+e.target.value)}
           ></Form.Control>
         </Form.Group>

         <Form.Group controlId='diameter'>
           <Form.Label>Diameter</Form.Label>
           <Form.Control
             type='number'
             placeholder='Enter diameter'
             value={diameter}
             onChange={(e) => setDiameter(+e.target.value)}
           ></Form.Control>
         </Form.Group>

         <Form.Group controlId='mass'>
           <Form.Label>Mass</Form.Label>
           <Form.Control
             type='number'
             placeholder='Enter mass'
             value={mass}
             onChange={(e) => setMass(+e.target.value)}
           ></Form.Control>
         </Form.Group>

         <Button type='submit' variant='primary'>
           Update
         </Button>
       </Form>
          </Col>
        </Row>
      </Container> : 
        <></>
        }
        {error && 
          <div
          className="modal show"
          style={{ display: 'block', position: 'initial' }}
        >
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>ERROR</Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
              <p>{JSON.stringify(error)}</p>
            </Modal.Body>
    
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setError(undefined)}>Close</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
        }
    </>
  )
}

export default RocketEditScreen