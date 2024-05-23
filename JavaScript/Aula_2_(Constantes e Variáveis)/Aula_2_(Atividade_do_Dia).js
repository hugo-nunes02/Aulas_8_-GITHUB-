function EnviarForm(){

let altura = document.getElementById('altura').value;
let nome = document.getElementById('nome').value;
let peso = document.getElementById('peso').value;
const x = (altura * altura);
const IMC = (altura/x);;

console.log('Sua altura é:'+ altura);
console.log('Seu peso é:'+ peso);
console.log('Seu nome é:'+ nome);
console.log('Seu IMC é:'+ IMC)
}

