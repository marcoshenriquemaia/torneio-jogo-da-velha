const gameResult = () => {
  const $fieldList = document.querySelectorAll(".field");

  const line1 = [$fieldList[0], $fieldList[1], $fieldList[2]];
  const line2 = [$fieldList[3], $fieldList[4], $fieldList[5]];
  const line3 = [$fieldList[6], $fieldList[7], $fieldList[8]];

  const column1 = [$fieldList[0], $fieldList[3], $fieldList[6]];
  const column2 = [$fieldList[1], $fieldList[4], $fieldList[7]];
  const column3 = [$fieldList[2], $fieldList[5], $fieldList[8]];

  const diagonal1 = [$fieldList[0], $fieldList[4], $fieldList[8]];
  const diagonal2 = [$fieldList[2], $fieldList[4], $fieldList[6]];

  const fieldForTest = [line1, line2, line3, column1, column2, column3, diagonal1, diagonal2];

  let result = "";

  for (const fieldList of fieldForTest) {
    if (
      fieldList[0].textContent !== "" &&
      fieldList[0].textContent === fieldList[1].textContent &&
      fieldList[1].textContent === fieldList[2].textContent
    ) {
      fieldList.forEach(field => field.classList.add('win'))
      setTimeout(() => {
        fieldList.forEach(field => field.classList.remove('win'))
      }, 3000)
      result = fieldList[0].textContent;
    }
  }

  if ([...$fieldList].every(($field) => $field.textContent != "")) {
    result = "draw";
  }

  return result;
};

export default gameResult;
