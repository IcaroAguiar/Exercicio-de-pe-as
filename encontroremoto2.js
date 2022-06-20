let prompt = require("prompt-sync")();
let a = prompt('Entre com o numero de alunos') //entrada do numero de alunos
for(let i=0;i<a;i++ ){
    let j = i % 2 //confere par ou impar
    if(i == 0){
        console.log("O número é zero");
    } else if(j == 0){
        console.log("O numéro é par");
    } else if(j != 0){
        console.log("O numéro é impar");
    }
    
}