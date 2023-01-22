import React from "react";
import { Card } from "react-bootstrap";
import "./components.css"

export interface Rocket {
  name: string;
  description: string;
  height: number;
  diameter: number;
  mass: number;
  photo: any;
  id: string;
}

type Props = {
  rocket: Rocket;
};

const RocketCard = (props: Props) => {

  const { rocket } = props; 

  return (
    <Card className="my-3 py-3 rounderd">
      <a href={`/rocket/${rocket.id}`}>
        <img src={rocket.photo} className="rocketCard" alt=""/>
      </a>
      <Card.Body>
        <a href={`/rocket/${rocket.id}`}>
            <Card.Title as='div'>
                <strong>{rocket.name}</strong>
            </Card.Title>
        </a>
    </Card.Body>
    </Card>
  );
};

export default RocketCard;
