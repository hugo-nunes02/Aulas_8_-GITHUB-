const num = 'Ola';
const g = 11;

if(g % 2==0&& !isNaN(g))
    console.log('Número Par');

else if (g % 2 !=0 && !isNaN(g))
    console.log('Número Ímpar')
    
 else console.log('Não é um número');

 // Operador ternário

 console.clear();
 let resultado = 3 > 4 ? 'Sim': 'Não';
 console.log (resultado)

 //Switch e operador ternário

 console.clear();
 const h = 11;
 const cor = h > 11? 'vermelha':'azul';

 switch(cor){case'vermelha': console.log("A cor é vermelha!");
    break;
    case "azul": console.log("A cor é azul!");
        break;
        default: console.log('A cor não é vermelha nem azul')
 }

 // Array unidimensional

const num1 = new Array (30,-1,5,3,121);
const num2 = (-2,40,16,111,33,164);
console.log(num1);
console.log(num2);

// Acessando elementos diversos do array

console.log(`primeiro elemento de num1: ${num1[0]}`);
console.log(`primeiro elemento de num2: ${num1[0]}`);

console.log(`primeiro elemento de num1: ${num1[2]}`);
console.log(`primeiro elemento de num2: ${num2[5]}`);


// Estrutura condicional if e else

console.clear();

const e = '10';
if (e === 10)console.log('E equivale ao número 10');

else{console.log('Resultado da condição: ${e===10}');
console.log('E não é um número')}

// Array bidimensional

console.clear();
const matrix=[['Banana','Maça','Pêra'],
['Laranja',true,1],
[null,'Uva',-350]];

// Acessando elementos diversos dos arrays
console.log(`Acessa a primeira linha:${matrix[0]}`);
console.log(`Acessa a primeira linha:${matrix[0][1]}`);