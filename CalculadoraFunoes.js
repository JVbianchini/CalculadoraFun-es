function soma(a, b) {
    return a + b;
  }
  
  function subtracao(a, b) {
    return a - b;
  }
  
  function multiplicacao(a, b) {
    return a * b;
  }
  
  function divisao(a, b) {
    if (b === 0) {
      return "Erro: divisão por zero!";
    }
    return a / b;
  }
  
  // Solicita os números e a operação ao usuário
  const num1 = parseFloat(prompt("Digite o primeiro número:"));
  const num2 = parseFloat(prompt("Digite o segundo número:"));
  const operacao = prompt("Digite a operação (+, -, *, /):");
  
  // Chama a função correspondente e exibe o resultado
  let resultado;
  
  switch (operacao) {
    case "+":
      resultado = soma(num1, num2);
      break;
    case "-":
      resultado = subtracao(num1, num2);
      break;
    case "*":
      resultado = multiplicacao(num1, num2);
      break;
    case "/":
      resultado = divisao(num1, num2);
      break;
    default:
      resultado = "Operação inválida!";
  }
  
  console.log("Resultado:", resultado);
