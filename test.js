const calculation = require('./module.js')


const operation = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])


if(operation === 'sum'){
   console.log (calculation.add(num1, num2))
}else if(operation === 'sub'){
    console.log (calculation.sub(num1, num2))
}else if(operation === 'mul'){
   console.log (calculation.mul(num1, num2))
}else if(operation === 'div'){
  console.log (calculation.div(num1, num2))
}else{
  console.log('invalid operation')
}