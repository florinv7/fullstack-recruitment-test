import React, {useEffect, useState} from 'react'
import RocketCard from '../components/RocketCard'
import { Row, Col } from 'react-bootstrap'
import { Rocket } from '../components/RocketCard'
import axios from 'axios'

type Props = {}

export function parseRocket(obj : any) : Rocket{
    return {
        description : obj.description,
        diameter : obj.diameter,
        height : obj.height,
        id : obj._id,
        mass : obj.mass,
        name : obj.name,
        photo : obj.photo || obj.photoUrl,
    }
}

const HomeScreen = (props: Props) => {

    const [rockets, setRockets] = useState([])

    useEffect(() => {
        const fetchRockets = async () => {
            const { data } = await axios.get("/api/rockets")
            setRockets(data)
        }

        fetchRockets()
    }, [])

  return (
    <>
        <h1>Rockets</h1>
        <Row>
            {rockets.map((rocket : any) => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <RocketCard rocket={parseRocket(rocket)}></RocketCard>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen