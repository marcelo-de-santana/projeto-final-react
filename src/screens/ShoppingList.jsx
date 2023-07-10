import { useState } from "react";
import { BodyHead, InputsLine, BodyLines, TotalValuesBox } from "../components/Table";

export default function ShoppingList() {
  const [product, setProduct] = useState([]);

  return (
    <div className="App">
      <div className="shoppping-list-box">
        <h1 className="head-list-text">Lista de Compras</h1>

        <table className="table table table-striped text-center">
          <BodyHead />
          <tbody>
            <BodyLines product={product} setProduct={setProduct} />
            <InputsLine product={product} setProduct={setProduct} />
          </tbody>
        </table>
        <TotalValuesBox product={product} />
      </div>
    </div>
  );
}
