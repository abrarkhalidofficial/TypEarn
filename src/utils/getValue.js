import { ethers } from "ethers";

export function toDecimal(i) {
  let value = i.toString();
  let e = 0;
  let positionOfe = value.indexOf("e");

  if (value.includes("e")) {
    let power = value.substring(positionOfe + 2);
    e = parseInt(power) - 18;
  } else {
    return null;
  }

  value = value.substring(0, positionOfe);

  let val = value + "e" + e.toString();
  return {
    value,
    e,
    val,
  };
}

export function getValue(value) {
  let returnedValue = toDecimal(parseInt(value));
  if (returnedValue === null) {
    return ethers.utils.formatUnits(parseInt(value, 16), 6);
  }
  return returnedValue.val;
}
export function getValueOfDate(value) {
  return parseInt(value, 16);
}
