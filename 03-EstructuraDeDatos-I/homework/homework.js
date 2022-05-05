'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)

  if (n == 1 || n == 0){
    return 1;
  }
  let resultado = n * nFactorial( n - 1);
  return resultado;
}


function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  if(n < 2){
    return n;
  }
return nFibonacci(n-1) + nFibonacci(n - 2);
}

// //  return 0
//         (0) 
//     //return 1
// nFibonacci(1)
// nFibonacci(2) + (0)      //1                  2 2
// nFibonacci(3) + (-1n)      //2                  4 3
// nFibonacci(4) + (1n)     //3                  7 4
// nFibonacci(5) + (3n)     //5                 11 5
// nFibonacci(6) + (-4n)     //8                 16 6



// pasar de binario a decimal
// function strignReves(str){    //Hola
  
// let nuevaCadena = "";
// nuevaCadena = nuevaCadena + str.charAt(str.length);
//   if (str.length == 0){
//     return nuevaCadena;
//   }

//   return strignReves(str.length - 1)

// }



// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

function Queue() {

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
