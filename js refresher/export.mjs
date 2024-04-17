const fileName = "sum"

const person = {
  name: "John",
  age: 21,
  sex: "male"
}

function toInt (a){
  return parseInt(a)
}

function add(a,b){
  return toInt(a)+ toInt(b)
}

// mostly for many or helper functions or object or variables
export {person,fileName, toInt}


// only allowed once
export default add