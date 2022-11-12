import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="card-footer text-light bg-dark pt-3">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h6 className="lh">información</h6>
            <p>
              <Link to={"/P&C"}>Politicas y condiciones</Link>
            </p>
            <p>
              <Link to={"/Privacy"}>Terminos De Uso y Privacidad</Link>
            </p>
            <p>
              <Link to={"/PG"}>Preguntas Frecuentes</Link>
            </p>
          </div>
          <div className="col">
            <h6 className="lh">Contactos</h6>
            <p>Mooisesjusto2406@gmail.com</p>
            <p>+1849-803-3413</p>
            <p>Calle General Sucre #93 Ens: Capotillo En Santo Domingo: RD</p>
          </div>
          <div className="col">
            <h6 className="lh">© Copyright 2022</h6>
            <p className="">ParchisCoin plataforma, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
