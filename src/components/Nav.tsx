import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavScrollExample() {
  return (
    <Navbar bg="black" expand="lg" variant="dark">
      <Container fluid className="container">
        <Link to={"/"} className="navbar-brand">
          ParchisCoin
        </Link>
        <Button
          //variant="success"
          variant="danger"
          onClick={() => alert("Este Juego Aun No Esta Disponible")}
        >
          {/* <a
            href="https://github.com/moises2406/app-miner-eletron/releases/download/1.0.1/ParchisCoin.Setup.4.6.0.exe"
            className="B"
          >
            Descargar
          </a>{" "} */}
          Descargar
        </Button>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
