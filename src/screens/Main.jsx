import "../components/Styles.css";
import { Button } from "../components/Button";

export default function Main() {
  function sendAlert() {
    alert("Módulo não disponível");
  }

  return (
    <div className="App">
      <div className="box-body">
        <div className="text-box">
          <h1 className="primary-text">Bem Vindo ao Controle de Gastos!</h1>
          <p className="primary-text">O que deseja calcular?</p>
        </div>
        <div className="box-sections">
          <Button text="Lista de Compras" path="/shopping-list" />
          <button className="btn btn-primary main-button" onClick={sendAlert}>
            Gastos Fixos de Casa
          </button>
          <button className="btn btn-primary main-button" onClick={sendAlert}>
            Saídas para Lanchar
          </button>
        </div>
      </div>
    </div>
  );
}
