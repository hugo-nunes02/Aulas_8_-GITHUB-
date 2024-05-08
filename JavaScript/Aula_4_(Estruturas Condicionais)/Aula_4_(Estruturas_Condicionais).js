const a = 10
if (a == 10) {console.log("a é 10")}

const b = '9'
if (b < 10) {console.log('b é menor a 10')}

const X = 11
if (X == 10) {console.log('X equivale a 10')} else { console.log('X não equivale a 10') }

console.clear ();
const c= 10;
if (c === 10) {console.log ('c é 10')};

const d= '10';
if (d === 10) {console.log ('d é 10')} 
console.log('Estou fora do if que compara string');

console.clear ();

// Estrutura if e else //

const e ='10';
if(e===10)console.log('e é o número 10')

    else{
        console.log('Resultado da condição:${e===10}')
        console.log('e não é um numeral')
    }

    
    // Múltiplas condições de if e else //

    console.clear();

    const f = 4;
    const g = 11;

    if(f > 5 ||g > 10){ console.log ('Condição é ${f > 5|| g > 10}');
console.log('f é maior que 5 OU g é menor que 10')
}
else{console.log('f não é maior que 5 OU g é menor que 10');}

if(f>5 && g>10) console.log('f é maior que 5 E g é maior que 10');

else{console.log('Condição é ${f > 5 && g > 10}');
console.log('f não é maior que 5 OU g não é maior que 10');}
