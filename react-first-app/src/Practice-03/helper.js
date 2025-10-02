function generateTicket(n) {
  let newArr = new Array(n);
  for (let i = 0; i < n; i++) {
    newArr[i] = Math.floor(Math.random() * 10);
  }
  return newArr;
}

function sum(arr) {
  return arr.reduce((pre, curr) => pre + curr);
}

export { generateTicket, sum };
