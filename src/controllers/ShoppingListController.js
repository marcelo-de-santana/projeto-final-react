import { useState } from "react";

function ShoppingListController() {
  const [product, setProduct] = useState([]);

  function saveProduct(name = "", price = "", quantity = "", value = "") {
    setProduct((prevState) => ({
      ...prevState,
      name: name,
      price: price,
      quantity: quantity,
      value: value,
    }));
  }
  function getProduct() {
    return product;
  }
}

export { ShoppingListController}
