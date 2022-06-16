let dataAtual = new Date("2022-06-15")
let dataEvento = new Date("2022-07-16")
let idadeParticipante = 16
listaParticipantes = ["Ana","Icaro", "João"]

while(listaParticipantes.length < 100){
if(dataEvento > dataAtual){

console.log("A data é válida para cadastro, pode prosseguir")

} else{
    console.log("Cadastro negado por data inválida")
} 

if (idadeParticipante >= 18){
    console.log("A idade é válida para cadastro, pode prosseguir")
} else {
    console.log("Cadastro negado por idade inválida")
}

}
console.log("Cadastros bloqueados, número de participantes excedido")