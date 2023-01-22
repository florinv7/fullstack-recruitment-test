import React, {useEffect, useState} from 'react'
import RocketCard from '../components/RocketCard'
import { Row, Col } from 'react-bootstrap'
import Pagination from 'react-bootstrap/Pagination';
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
    const [currentPage, setCurrentPage] = useState(1)
    const [hasNext, setHasNext] = useState(false)

    useEffect(() => {
        const fetchRockets = async () => {
            const { data } = await axios.get(`/api/rockets?page=${currentPage}`)
            setRockets(data.rockets)
            setHasNext(data.hasNext)
        }

        fetchRockets()
    }, [currentPage])

  return (
    <>
        <h1>Rockets</h1>
        <Row>
            {rockets.map((rocket : any) => (
                <Col sm={12} md={6}>
                    <RocketCard rocket={parseRocket(rocket)}></RocketCard>
                </Col>
            ))}
        </Row>
        <Pagination>
            
            {currentPage > 1 && <>
                <Pagination.First onClick={() => setCurrentPage(1)}/>
                <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)}/>
                <Pagination.Ellipsis />
                <Pagination.Item onClick={() => setCurrentPage(currentPage - 1)}>{currentPage-1}</Pagination.Item>
            </>}
            

            <Pagination.Item active>{currentPage}</Pagination.Item>
            
            {hasNext && <>
                <Pagination.Item onClick={() => setCurrentPage(currentPage + 1)}>{currentPage+1}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)}/>
            </>}
            
        </Pagination>
    </>
  )
}

export default HomeScreen