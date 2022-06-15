const anoAtual = 2022
const mesAtual = 6
const diaAtual = 15
let anoEvento = 2022
let mesEvento = 7
let diaEvento = 17
let idadeParticipante = 16
listaParticipantes = ["Ana","Icaro", "João"]
permitirCadastro = listaParticipantes.length < 100

while(permitirCadastro){
if(anoEvento >= anoAtual && mesEvento > mesAtual && diaEvento > diaAtual){

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