"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_bootstrap_1 = require("react-bootstrap");
const products_1 = __importDefault(require("./products"));
require("./screens.css");
const RocketScreen = (props) => {
    let { id } = (0, react_router_dom_1.useParams)();
    const rocket = products_1.default.find((r) => r._id === id);
    return (<>
        <react_router_dom_1.Link className='btn btn-dark my-3' to="/">
          Go back
        </react_router_dom_1.Link>
        {rocket !== undefined ?
            <react_bootstrap_1.Row>
          <react_bootstrap_1.Col md={6}>
            <react_bootstrap_1.Image src={rocket.photo} alt={rocket.name} className="rocketImage"></react_bootstrap_1.Image>
          </react_bootstrap_1.Col>
          <react_bootstrap_1.Col md={6}>
            <react_bootstrap_1.ListGroup variant='flush'> 
              <react_bootstrap_1.ListGroup.Item>
                <h3>{rocket.name}</h3>
              </react_bootstrap_1.ListGroup.Item>
              <react_bootstrap_1.ListGroup.Item>
                Description : {rocket.description}
              </react_bootstrap_1.ListGroup.Item>
              <react_bootstrap_1.ListGroup.Item>
                Diameter : {rocket.diameter} m
              </react_bootstrap_1.ListGroup.Item>
              <react_bootstrap_1.ListGroup.Item>
                Height : {rocket.height} m
              </react_bootstrap_1.ListGroup.Item>
              <react_bootstrap_1.ListGroup.Item>
                Mass : {rocket.mass} kg
              </react_bootstrap_1.ListGroup.Item>
            </react_bootstrap_1.ListGroup>
          </react_bootstrap_1.Col>
        </react_bootstrap_1.Row> :
            <div>Not found</div>}
    </>);
};
exports.default = RocketScreen;
