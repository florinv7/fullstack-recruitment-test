"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const RocketCard_1 = __importDefault(require("../components/RocketCard"));
const react_bootstrap_1 = require("react-bootstrap");
const axios_1 = __importDefault(require("axios"));
const HomeScreen = (props) => {
    const [rockets, setRockets] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const fetchRockets = () => __awaiter(void 0, void 0, void 0, function* () {
            const { data } = yield axios_1.default.get("/");
            setRockets(data);
        });
        fetchRockets();
    }, []);
    const parseRocket = (obj) => {
        return {
            description: obj.description,
            diameter: obj.diameter,
            height: obj.height,
            id: obj._id,
            mass: obj.mass,
            name: obj.name,
            photo: obj.photo,
        };
    };
    return (<>
        <h1>Rockets</h1>
        <react_bootstrap_1.Row>
            {rockets.map((rocket) => (<react_bootstrap_1.Col sm={12} md={6} lg={4} xl={3}>
                    <RocketCard_1.default rocket={parseRocket(rocket)}></RocketCard_1.default>
                </react_bootstrap_1.Col>))}
        </react_bootstrap_1.Row>
    </>);
};
exports.default = HomeScreen;
