import modal from "../components/Modal/index.js";

const moveTest = (index, move, onOk) => {
  const $fieldList = document.querySelectorAll(".field");
  if (typeof index !== "number") return modal("O bot não retornou um número", onOk);

  if ($fieldList[index]?.textContent) return modal(`O bot ${move} tentou jogar na cada de index ${index} que já foi jogada`, onOk);
  if (index > 8) return modal("ERROR: Number is too big", onOk);
  if (index < 0) return modal("ERROR: Number is too small", onOk);
  if (index % 1 !== 0) return modal("ERROR: The number is not an integer", onOk);

  return true;
}

export default moveTest