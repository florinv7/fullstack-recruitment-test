"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_bootstrap_1 = require("react-bootstrap");
const react_router_dom_1 = require("react-router-dom");
const Header_1 = __importDefault(require("./components/Header"));
const Footer_1 = __importDefault(require("./components/Footer"));
const HomeScreen_1 = __importDefault(require("./Screens/HomeScreen"));
const RocketScreen_1 = __importDefault(require("./Screens/RocketScreen"));
const App = () => {
    return (<react_router_dom_1.BrowserRouter>
      <Header_1.default></Header_1.default>
      <main className="py-3">
        <react_bootstrap_1.Container>
          <react_router_dom_1.Routes>
            <react_router_dom_1.Route path="/" element={<HomeScreen_1.default></HomeScreen_1.default>}></react_router_dom_1.Route>
            <react_router_dom_1.Route path="/rocket/:id" element={<RocketScreen_1.default></RocketScreen_1.default>}></react_router_dom_1.Route>
          </react_router_dom_1.Routes>
        </react_bootstrap_1.Container>
      </main>
      <Footer_1.default></Footer_1.default>
    </react_router_dom_1.BrowserRouter>);
};
exports.default = App;
