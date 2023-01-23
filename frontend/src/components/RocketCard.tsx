import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./components.css"

export interface Rocket {
  name: string;
  description: string;
  height: number;
  diameter: number;
  mass: number;
  photo: string;
  id: string;
}

type Props = {
  rocket: Rocket;
};

const RocketCard = (props: Props) => {

  const { rocket } = props; 

  return (
    <Card className="my-3 py-3 rounderd">
      <Link to={`/rocket/${rocket.id}`}>
        <img src={rocket.photo} className="rocketCard" alt=""/>
      </Link>
      <Card.Body>
        <Link to={`/rocket/${rocket.id}`}>
            <Card.Title as='div'>
                <strong>{rocket.name}</strong>
            </Card.Title>
        </Link>
    </Card.Body>
    </Card>
  );
};

export default RocketCard;
