x = 1; 
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);   // 10
  console.log(a);   //8
  var f = function(a, b, c) {
    b = a;
    console.log(b);  // 8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);   //9
}
c(8,9,10);
console.log(b); //10
console.log(x); //1


//Ejercicio 2

console.log(bar);    //undefined
console.log(baz);    //error

foo();                      //Hola      

function foo() { console.log('Hola!'); }        

var bar = 1;                     

baz = 2;                      


//EJERCICIO 3

var instructor = "Tony";
if(true) {
    var instructor = "Franco";          // da franco xq estamos en un if
}                                           // Si tuvieramos un let, si nos daria tony, xq no importa si estamos en un bloque funcion, etc
console.log(instructor);    //Tony          //correcion == Franco

//EJERCICIO 4

var instructor2 = "Tony";
console.log(instructor2);    //Tony
(function() {
   if(true) {
      var instructor2 = "Franco";    
      console.log(instructor2);          //Franco
   }
})();                                   //invocacion inmediata despues de declarar. aca da tony xq ahora si la var esta dentro de una funcion
console.log(instructor2);        //Franco   //correcio == Tony


//  ejercicio 5

var instructor3 = "Tony";
let pm = "Franco";
if (true) {
    var instructor3 = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor3);       //the flash
    console.log(pm);        //"Reverse Flash"
}
console.log(instructor3);       //tony          //correcion == the flash
console.log(pm);                //Franco

//ejercicio 6

function test() {
    console.log(a);             //undefined
    console.log(foo());         // 2
 
    var a = 1;
    function foo() {                //aprendi que la funciones aunque esten en un bloque suben al hosting tambien
       return 2;
    }
 }
 
 test();


 //ejercicio 7

 var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }                                   //aca pueden pasar 2 cosas o la var(snack) fue saliendo de su scope o snack
    return snack;                        // es el valor que va a retornar la funcion. (es un valor temporal)-nose q pasa.
}

getFood(false);             //la funcion no se ejecuta  // si el argumento es true retorna friskies


//ejercicio 8


var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());        //natalia nerea

var test = obj.prop.getFullname;            // test == function

console.log(test());                //natalia nerea



//ejercicio 9

function printing() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
 }
 
 printing(); //imprime 1, luego 4, luego 3,luego 2.