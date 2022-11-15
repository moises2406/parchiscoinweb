import {
  MemoryRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

import Main from "./components/Main";
import PG from "./components/PG";
import PyC from "./components/P&C";
import Privacy from "./components/Privacy";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <br />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/PG" element={<PG />} />
        <Route path="/P&C" element={<PyC />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
