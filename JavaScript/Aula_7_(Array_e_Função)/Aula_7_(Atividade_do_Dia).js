//Alunos
const alunos = [
    {
      nome: "Hugo",
      notas: [10, 10, 9],
      endereco: "Rua A, 123"
    },
    {
      nome: "Renata",
      notas: [10, 10, 10],
      endereco: "Rua B, 456"
    },
    {
      nome: "Matheus",
      notas: [6, 1, 4],
      endereco: "Rua C, 789"
    },
    {
        nome: "João",
        notas: [2, 0, 7],
        endereco: "Rua D, 012 "
      },
      {
        nome: "Ana",
        notas: [6, 7, 8],
        endereco: "Rua A, 345"
      },
    ];

    // Função cálculo de notas
function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
  }

// Aprovação - Reprovação
function verificarAprovacao(media) {
    return media >= 7 ? "aprovado(a)" : "reprovado(a)";
  }

  // Informações
  alunos.forEach(aluno => {
    const media = calcularMedia(aluno.notas);
    const situacao = verificarAprovacao(media)});

    console.log('Aluno(a)' + ${alunos.nome} + 'com notas' + ${alunos.notas.join('', '')} + 'mora em' + ${alunos.endereco} + 'e teve a média' ${media.toFixed(2)} + ', portanto foi' + ${situacao})
  