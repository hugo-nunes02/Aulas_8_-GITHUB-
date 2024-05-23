let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  console.log("Antes");
  console.log(matrix1);
  
  // Alterando um valor do array
  //Teste de alteração de valores de variável
  console.clear();
  matrix1[0][2] = -10;
  console.log("Depois");
  console.log(matrix1);
  
  //Métodos de Array - toString (Transformar objeto em texto)
  console.clear();
  let numArray = [1, 2, 3, 4];
  console.log(typeof numArray);
  
  let numArray2 = numArray.toString();
  console.log(typeof numArray2);
  
  // Métodos de Arrays - join (converte array em string/coloca caracteres separadores nos elementos)
  console.clear();
  let teste1 = [0, 1, 2, 3, 4, 5];
  let teste2 = teste1.join("*");
  
  console.log(teste2);
  console.log(typeof teste2);
  
  // Tamanho do Array - length (Serve para mostrar a quantidade de itens no array)
  console.clear();
  let array = [0, 1, 2, 3, 4];
  console.log(array.length);
  
  // Métodos de arrays - pop (Seleciona o último item do Array)
  console.clear();
  const frutas1 = ["Banana", "Laranja", "Maçã", "Uva", "Manga"];
  let x = frutas1.pop();
  console.log(frutas1);
  console.log(x);
  
  // Métodos de Array - push (Ele puxa um item ao array e insere o novo tamanho do array)
  console.clear();
  const frutas2 = ['Banana','Laranja','Maçã','Abacaxi'];
  let y = frutas2.push('Kiwi');
  console.log(frutas2);
  console.log(y);
  
  //Métodos de Array - shift (remove o primeiro elemento do aray e retorna esse elemento)
  console.clear();
  const frutas3 = ['Banana','Laranja'];
  let z = frutas3.shift(); //z=Banana
  console.log(frutas3)
  console.log(z)
  
  //Métodos de Array - unshift (insere o primeiro elemento do aray e retorna o tamanho desse elemento)
  console.clear();
  const frutas4 = ['Banana','Laranja'];
  let w = frutas4.unshift('Kiwi'); //w=Kiwi
  console.log(frutas4)
  console.log(w)
  
  //Métodos de Array - Delete (Deleta um item específico do array, deixando um "slot empty" no lugar)
  console.clear ();
  const frutas5 = ['Banana','Laranja','Maçã','Manga'];
  delete frutas5[2];
  console.log(frutas5);