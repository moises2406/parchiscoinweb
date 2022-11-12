import Res from "./Respuestas";

export default function PG() {
  return (
    <div className="container">
      <br />
      <input className="form-control" type="text" placeholder="Busqueda" />
      <br />
      <div className="container overflow-hidden text-center">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3 border bg-light">
              <h2>Preguntas & Respuestas</h2>
              <br />
              <Res />
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h2>Deja Tu Pregunta</h2>
              <div className="mb-3">
                <label form={"exampleFormControlInput1"} className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  form={"exampleFormControlTextarea1"}
                  className="form-label"
                >
                  Mensage
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                ></textarea>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
