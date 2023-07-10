function numeric(value) {
  value = value.replace(/\D/, "");
  value = value.replace(/(\d+)(\d{2})/, "$1.$2");
  return value;
}

function monetary(value) {
  value = Number(value);
  value = value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
  return value;
}
export default { monetary, numeric };
