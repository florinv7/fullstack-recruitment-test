import React from 'react'
import rockets from './products'
import RocketCard from '../components/RocketCard'
import { Row, Col } from 'react-bootstrap'
import { Rocket } from '../components/RocketCard'

type Props = {}


const HomeScreen = (props: Props) => {

    const parseRocket = (obj : any) : Rocket => {
        return {
            description : obj.description,
            diameter : obj.diameter,
            height : obj.height,
            id : obj._id,
            mass : obj.mass,
            name : obj.name,
            photo : obj.photo,
        }
    }

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