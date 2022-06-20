let prompt = require("prompt-sync")();

let listaDeNumeros = [];
for (let i = 0; i < 10; i++) {
  let j = prompt();
  listaDeNumeros.push(parseInt(j));
}
console.log(Math.max(...listaDeNumeros));
