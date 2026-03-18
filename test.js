 import { sum,mul,div,sub } from "./module.js";


const operation = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])


if(operation === 'sum'){
   console.log (sum(num1, num2))
}else if(operation === 'sub'){
    console.log (sub(num1, num2))
}else if(operation === 'mul'){
   console.log (mul(num1, num2))
}else if(operation === 'div'){
  console.log (div(num1, num2))
}else{
  console.log('invalid operation')
}