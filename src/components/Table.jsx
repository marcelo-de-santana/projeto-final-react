import { useState } from "react";
import mask from "../utils/mask";

function BodyHead() {
  return (
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Produto</th>
        <th scope="col">Preço</th>
        <th scope="col">Qtd.</th>
        <th scope="col">Valor</th>
        <th scope="col" className="col-1"></th>
      </tr>
    </thead>
  );
}

function BodyLines({ product = "", setProduct = "" }) {
  function dropProduct(indexProduct) {
    const newList = product.filter((item, index) => index !== indexProduct);
    setProduct(newList);
  }

  return product.map((item, index) => {
    const { name, price, quantity, value } = item;
    return (
      <tr key={index}>
        <td scope="row">{index + 1}</td>
        <td>{name}</td>
        <td>{mask.monetary(price)}</td>
        <td>{quantity}</td>
        <td>{mask.monetary(value)}</td>
        <td>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => dropProduct(index)}
          >
            Deletar
          </button>
        </td>
      </tr>
    );
  });
}

function InputsLine({ product = "", setProduct = "" }) {
  const [inputValues, setInputValues] = useState({
    name: "",
    price: "",
    quantity: "",
    value: "",
  });

  function handleChangeValue(key = "", value = "") {
    setInputValues((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  function saveProduct() {
    const { price, quantity } = inputValues;
    setProduct((prevState) => [
      ...prevState,
      { ...inputValues, value: price * quantity },
    ]);
    setInputValues({ name: "", price: "", quantity: "", value: "" });
  }

  return (
    <tr>
      <td scope="row">{product.length + 1}</td>
      <td>
        <input
          type="text"
          className="form-control form-control-sm"
          value={inputValues.name}
          onChange={({ target }) => handleChangeValue("name", target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control form-control-sm"
          value={inputValues.price}
          required={true}
          onChange={({ target }) =>
            handleChangeValue("price", mask.numeric(target.value))
          }
        />
      </td>
      <td>
        <input
          type="number"
          className="form-control form-control-sm"
          min="0"
          value={inputValues.quantity}
          onChange={({ target }) => handleChangeValue("quantity", target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          disabled={true}
          className="form-control form-control-sm"
          value={mask.monetary(inputValues.quantity * inputValues.price)}
        />
      </td>
      <td>
        <button
          className="btn btn-outline-success btn-sm"
          onClick={() => saveProduct()}
        >
          Gravar
        </button>
      </td>
    </tr>
  );
}

function TotalValuesBox({ product = [] }) {
  const [budget, setbudget] = useState(0);
  const results = sumResults();
  const resultsColor = budget >= results ? "primary" : "danger";

  function sumResults() {
    let resutaldo = 0;
    product.forEach(({ value }) => (resutaldo += value));
    return resutaldo;
  }

  return (
    <div className="float-end">
      <div className={`p-3 mb-4 bg-${resultsColor}-subtle rounded`}>
        <span>Valor Total:</span>
        <input
          type="text"
          className="form-control form-control-sm bg-transparent border-0 text-end"
          value={mask.monetary(results)}
          disabled={true}
        />
      </div>
      <div className="p-3 bg-danger-subtle rounded">
        <span>Só posso gastar:</span>
        <input
          type="text"
          className="form-control form-control-sm bg-transparent border-dark text-end"
          value={budget}
          onChange={({ target }) => setbudget(mask.numeric(target.value))}
        />
      </div>
    </div>
  );
}

export { BodyHead, InputsLine, BodyLines, TotalValuesBox };
