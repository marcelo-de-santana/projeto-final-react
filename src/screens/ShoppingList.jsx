import { useState } from "react";

export default function ShoppingList() {
  const [product, setProduct] = useState([
    { name: "Abacaxi", price: 10.0, quantity: 2, value: 20.0 },
    { name: "Abacaxi", price: 10.0, quantity: 2, value: 20.0 },
    { name: "Abacaxi", price: 10.0, quantity: 2, value: 20.0 },
  ]);

  function TableBodyLines() {
    return product.map((item, index) => {
      const { name, price, quantity, value } = item;
      return (
        <tr key={index}>
          <td scope="row">{index + 1}</td>
          <td>{name}</td>
          <td>{price}</td>
          <td>{quantity}</td>
          <td>{value}</td>
          <td>
            <button className="btn btn-outline-danger">Deletar</button>
          </td>
        </tr>
      );
    });
  }

  function TableInputLine() {
    return (
      <tr>
        <td scope="row"></td>
        <td>
          <input type="text" class="form-control" />
        </td>
        <td>
          <input type="text" class="form-control" />
        </td>
        <td>
          <input type="number" class="form-control" />
        </td>{" "}
        <td>
          <input type="text" class="form-control" />
        </td>{" "}
        <td>
          <button className="btn btn-outline-success">Gravar</button>
        </td>
      </tr>
    );
  }

  return (
    <div className="App">
      <div className="shoppping-list-box">
        <h1 className="head-list-text">Lista de Compras</h1>

        <table className="table table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Produto</th>
              <th scope="col">Preço</th>
              <th scope="col">Qtd.</th>
              <th scope="col">Valor</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <TableBodyLines />
          </tbody>
        </table>
        <TableInputLine />
      </div>
    </div>
  );
}
