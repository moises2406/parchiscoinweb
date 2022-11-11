import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="card-footer text-muted bg-dark foott">
      <div className="container">
        <div className="h2 ">
          <h6>© Copyright 2022</h6>
          <p className="pr">ParchisCoin plataforma, Inc.</p>
        </div>
        <div className="h2 start-50">
          <h6>Info</h6>
          <p className="pr">
            <Link to={"/P&C"}>Politicas y condiciones</Link>
            <br />
            <br />
            <Link to={"/Privacy"}>Terminos De Uso y Privacidad</Link>
            <br />
            <br />
            <p onClick={() => alert("Esta pagina no esta lista")}>
              Preguntas Frecuentes
            </p>
          </p>
        </div>

        <div className="h2 end-0">
          <h6>Contactos</h6>
          <p className="pr">
            Mooisesjusto2406@gmail.com
            <br />
            <br />
            +1849-803-3413
            <br />
            <br />
            Calle General Sucre #93 Ens: Capotillo En Santo Domingo: RD
          </p>
        </div>
      </div>
    </div>
  );
}
