const decimalConversion = {
  0.25: "1/4", 
  0.5: "1/2", 
  0.75: "3/4", 
  0.33: "1/3", 
  0.66: "2/3"
}

const unityConversion = {
  "ml": "L", 
  "g": "kg"
}

function Conversion(number, quantity, servingsNumber) {
  number = number * servingsNumber; 

  if (number < 1)
  {
    return quantity ? (`${decimalConversion[number]} ${quantity}`)
      : decimalConversion[number]
  }
  else if (number >= 1 && quantity === undefined) {
    return number; 
  } else if ((number > 999 && quantity === "ml") || (number > 999 && quantity === "g"))
  {
    return `${number / 1000} ${unityConversion[quantity]}`;
  } else
  {
    return `${number} ${quantity}`; 
  }
}

export default Conversion 