function myFunc(num1, num2) {
    return num1 * num2;
  }
  
  // forma prática de declarar uma função
  const hello = () => {
    return "Olá Arrow Function!";
  };
  
  // Exemplo usando versão da addNums:
  const addNums2 = (num1 = 1, num2 = 1) => {
    return num1 + num2;
  };
  console.log(hello);
  console.log(hello());
  
  console.clear();
  const addNums3 = (num1 = 1, num2 = 2) => {
    return num1 + num2;
  };
  
  let soma = addNums3 (5,10);
  console.log(soma)