const expretion = document.querySelector('.expretion')
const p = document.querySelector('.result');

function addNumber(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a+b)
    }, 1000);
  }); 
}  
function subNumber(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a-b)
    }, 1000);
  }); 
}  
function mulNumber(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a*b)
    }, 1000);
  }); 
}  
function divNumber(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a/b)
    }, 1000);
  }); 
}  

const operators = {
  "+" : addNumber,
  "-" : subNumber,
  "*" : mulNumber,
  "/" : divNumber
} 

async function calculator(){
  const arr = expretion.value.split("");
  const stack = [];
  console.log(arr);
    for (const item of arr) {
      if (!isNaN(item)) {
        stack.push(+item)
      }
      if (item in operators) {
        let x = stack.pop();
        let y = stack.pop();
        console.log(x, y);
        let res = await operators[item](y, x);
        console.log(res);
        stack.push(res);
      }
      console.log("stack = ", stack);
    };
    return stack.join("");
  }

async function output(){
  let out = await calculator();
  p.innerHTML = `Result:  ${out}`;
}
