// Função tradicional sem parâmetros
function saudacao() {
    console.log("Olá, seja bem-vindo!");
  }
  
  // Função tradicional com parâmetros e retorno de valor
  function soma(a, b) {
    return a + b;
  }
  
  // Arrow function com parâmetros e retorno de valor
  const multiplicacao = (x, y) => x * y;
  
  // Chamando as funções e exibindo os resultados
  saudacao(); // Chama a função sem parâmetros
  const resultadoSoma = soma(5, 3);
  console.log("Resultado da soma:", resultadoSoma); // Chama a função com parâmetros e retorno
  const resultadoMultiplicacao = multiplicacao(4, 6);
  console.log("Resultado da multiplicação:", resultadoMultiplicacao); // Chama a arrow function
  