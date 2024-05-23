//    1)
let contador = 0;
while (contador < 50) {
    contador++;
console.log(`1) ${contador}`);
}

//   2)
let cont = 10;
while (cont >= 0) {
console.log(`2) ${cont}`);
cont--;
}

//    3)
NumerosPares(100);
function NumerosPares(){
   for( let i = 0; 
    i <=100;
    i++
   )
if(i%2 === 0){ 
    console.log(i);
}
}
