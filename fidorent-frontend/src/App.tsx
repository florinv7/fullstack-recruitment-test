import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import RocketScreen from "./Screens/RocketScreen";

const App = () => {
  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
            <Route path="/rocket/:id" element={<RocketScreen></RocketScreen>}></Route>
          </Routes>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
};

export default App;
