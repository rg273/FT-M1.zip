'use strict'


function BinarioADecimal(num) {
  // tu codigo aca
  
//separar cada numero,
// multiplicar ese numero por la base elevada a la posicion,(teniendo en cuenta 0 primera pos)
//sumar resultados

//    "1 0 1 1 0 0"    
//     i
//   -(i+1)       ==>         en vez de usar un reverse podemos usar esto

var sum =0;
for(let i =0; i< num.length; i++){
  
  sum = sum + Math.pow(2, num.length - (i+1) * num[i]);

}
return sum;

//as dddddddddddddddddddddda,,,,,,,,,,,,,,,,,,,,,,,,msdddddddddddddddddddddddaskdamsldkmasdlkmaldskm
/*var resultado = 0;

function iglesias (num){

var posicionParaLaEcuacion = num.length  ;
    
for (var lucila = 0 ; lucila <= num.length  ; lucila ++){
    
    var separado = num.charAt( lucila  );
    
    separado= Number(separado);
    
    var operacion = (separado * 2) ** posicionParaLaEcuacion;
    
    console.log(operacion);
    
    resultado = resultado + operacion;
    
    
    
    posicionParaLaEcuacion = posicionParaLaEcuacion - 1;
    }
    return resultado;
}
/*  var resultado = 0;




var posicionParaLaEcuacion = num.length;
    
for (var lucila = 0 ; lucila < num.length  ; lucila ++){
    
    var separado = num.charAt( lucila  );
    separado=Number(separado);
    var operacion = (separado * 2) ** posicionParaLaEcuacion;
    
    console.log(operacion);
    
    resultado = resultado + operacion;
    
    
    
    posicionParaLaEcuacion = posicionParaLaEcuacion - 1;
    }
    return resultado;
  */
}
// var posicionParaLaEcuacion = num.length;

// var resultado = 0;

// for (var i =0 ; i < num.length ; i ++){

//     for(var j = 1; j < num.length; j ++){
    
//       //Sacamos el numero y lo asignamos
      
//       var separado = num.slice(i,j);
      
//       //lo hacemos numero
//       let numberNow = Number(separado);
      
//       //aplicamos la operacion
      
//       let operacion = (num.charAt(i) * 2) ** posicionParaLaEcuacion;
      
//       //asignamos la suma a una variable
      
//       resultado = resultado + operacion;
      
//       posicionParaLaEcuacion = posicionParaLaEcuacion - 1;
//     }

// }
// return resultado;
// }
/*function BinarioADecimal(num) {
  // tu codigo aca

var posicionParaLaEcuacion = num.length;
var resultado = 0;
function iglesias (num){
for (var lucila = 0 ; lucila < num.length  ; lucila ++){
    
    var separado = num.charAt( lucila  );
    
    console.log(separado);
    
    var operacion = (Number(separado) * 2) ** posicionParaLaEcuacion;
    
    resultado = resultado + operacion;
    
    console.log(operacion);
    
    posicionParaLaEcuacion = posicionParaLaEcuacion - 1;
    }
    return resultado;
}
 */

function DecimalABinario(num) {
  // tu codigo aca
/*dividimos el num entre la base 
tomamos el resto
dividivmos el resultado entre la base
volvemos a tomar el resto
y asi hasta que nuestro numero llegue a 0
finalmente, tomamos los restos de abajo hacia arriba
*/
 var binary ="";
 while(num > 0 ){   //while(num) es lo mismo

  binary=num%2 + binary;
  //  30%2 = 0 +"" == "0";
  //  15%2 = 1 + "" == "1";
  // 3    =1              "1" + "10"
  num= Math.floor(num/2);
 } 
 return binary;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}