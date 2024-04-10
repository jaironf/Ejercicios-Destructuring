console.log('hola caracola');

//Dado el siguiente objeto:
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];
  //Extrae la empleada Ana con todos sus datos personales:
  //{"name":"Ana", "email":"Ana@gmail.com"}
  const [p1, p2, p3] = empleados
  console.log(p2);
  //Extrae el email del empleado Luis --> Luis@gmail.com
  const {name, email} = p1
  console.log(email);

  //Dado el siguiente objeto:
const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}
// Cambia el nombre de la propiedad “name” por “nombre
// Extrae el nombre del Pokemon

const {name:nombre, type, ability, stats, moves} = pokemon
console.log(nombre);

// Extrae el tipo de Pokemon que es
console.log(type);

// Extrae el movimiento “Tackle”

const [, movimientos] = moves;
console.log(movimientos);



//Ejercicios spread/rest
//Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:
const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

const mergearObjetos = {...pokemon, ...pikachu};
console.log(mergearObjetos);


//Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
function sumEveryOther(...nums) {
    const suma = nums.reduce((a, b) => a + b);
    console.log(suma);

}

sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26 

//Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.


const addOnlyNums = (...onlyNumbers) => {
    return onlyNumbers.filter(onlyNumbers => typeof onlyNumbers === 'number').reduce((accurateValue, currentValue) => accurateValue + currentValue, 0);
  }
  
  console.log(addOnlyNums(1, 'perro', 2, 4)); // 7
  

addOnlyNums(1, 'perro', 2, 4); //7

//Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

const countTheArgs = (...numArgumento) => {
    console.log(numArgumento.length); 
}

countTheArgs('gato', 'perro'); //2
countTheArgs('gato', 'perro', 'pollo', 'oso'); //4

//Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
const arrayNumeros = [1, 2, 3, 4];
const arrayColores = ['Rojo', 'Azul', 'Verde'];

const combineTwoArrays = (arrayColores, arrayNumeros) => {
    return [...arrayNumeros, ...arrayColores];
}
console.log(combineTwoArrays(arrayNumeros, arrayColores));


//EXTRAS

//Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };

//Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana.

// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;

const {today: maximaHoy, tomorrow: maximaManana} = HIGH_TEMPERATURES

console.log(maximaHoy)
console.log(maximaManana)

//Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.


const onlyUniques = (...args) => {
    const uniqueArray = [];
    args.forEach(arg => {
      if (!uniqueArray.includes(arg)) {
        uniqueArray.push(arg);
      }
    });
    return uniqueArray;
  }
  
  
  console.log(onlyUniques('gato', 'pollo', 'cerdo', 'cerdo')); 
  console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8));
  

  onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'); //['gato', 'pollo', 'cerdo']
  onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7

