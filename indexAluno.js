
function calcular() {
   var valor1 = parseInt(prompt("Digite um valor"));
   var valor2 = parseInt(prompt("Digite o segundo valor"));
   var operacaoUsuario = prompt("Digite a operação (+, -, *, ou /)");

   var resultado;
   if (operacaoUsuario === '+') {
     resultado = valor1 + valor2;
   } else if (operacaoUsuario === '-') {
     resultado = valor1 - valor2;
   } else if (operacaoUsuario === '*') {
     resultado = valor1 * valor2;
   } else if (operacaoUsuario === '/') {
     resultado = valor1 / valor2;
   } else {
     alert("Operação inválida!");
     return;
   }

   alert("Resultado: " + resultado);
 }

 calcular();
