//Funcionários
const funcionarios = [
    { nome: "Wally", salario: 4800 },
    { nome: "Peter", salario: 5500 },
    { nome: "Bruce", salario: 6200 },
    { nome: "Carol", salario: 5100 },
    { nome: "Kauã", salario: 4800 }
  ];
  
  funcionarios.forEach(funcionario => {
    console.log("Nome:" + ${funcionario.nome}, + "Salário:" + R$ ${funcionario.salario});
  });

//Reajuste
const funcionariosReajustados = funcionarios.map(funcionario => {
    const novoSalario = funcionario.salario * 1.05; // 5% de aumento
    return { ...funcionario, salario: novoSalario };
  });
  
  // Filtro funcionários que recebem menos que 5000
  const funcionariosComSalarioAlto = funcionariosReajustados.filter(funcionario => {
    return funcionario.salario > 5000;
  });
  
  // Procurar wally
  const wally = funcionariosComSalarioAlto.find(funcionario => {
    return funcionario.nome === "Wally";
  });
  
  if (wally) {
    console.log("Encontrou o funcionário Wally:", wally);
  } else {
    console.log("Funcionário Wally não encontrado.");
  }