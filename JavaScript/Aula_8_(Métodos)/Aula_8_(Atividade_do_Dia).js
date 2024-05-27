// Mês, Ano, Hora
let dataHoje = new Date();
let dia = dataHoje.getDate();
let Mês = dataHoje.getMonth();
let hora = dataHoje.getHours();
let minuto = dataHoje.getMinutes();
let Mês2 = Mês + 1

console.log(`Agora são ${hora}:${minuto} do dia ${dia}/${Mês2}`)