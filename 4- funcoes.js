//A primeira versão, mais “clássica” e muito parecida com outras linguagens
//É a chamada “declaração de função”

function soma(num1, num2) {
    return num1 + num2;
   }

soma()

//A segunda forma atribui a função a uma variável, funcionalidade que já não é tão comum 
//em outras linguagens
//Chamamos essa forma de “expressão de função”.

const soma = function(num1, num2) {
    return num1 + num2;
   }

//A terceira e última forma é a arrow function ou “função de seta”, caracterizada pelo 
//operador =>
const soma = (num1, num2) => {
    return num1 + num2;
   }

//A arrow function também é uma expressão de função.
const soma = (num1, num2) => num1 + num2;

console.log(soma(1, 1)) //2

//é possível executar a função antes de declará-la no código
function soma(num1, num2) {
 return num1 + num2;
}
