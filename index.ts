import PizzaCommon from "./PizzaCommon";
import PizzaVegetarian from "./PizzaVegetarian";
import PizzaSugar from "./PizzaSugar";


const calabresa: PizzaCommon = {
  flavor: 'Calabresa',
  slices: 8
};

console.log(calabresa)

const frango: PizzaCommon = {
  flavor: 'Frango',
  slices: 8
};

console.log(frango);

const pepperoni: PizzaCommon = {
  flavor: 'Pepperoni',
  slices: 6
};

console.log(pepperoni);

const marguerita: PizzaVegetarian = {
  flavor: 'Marguerita',
  slices: 8
};

console.log(marguerita);

const palmito: PizzaVegetarian = {
  flavor: 'Palmito',
  slices: 8
};

console.log(palmito);


const nutella: PizzaSugar = {
  flavor: 'Nutella',
  slices: 4
}

console.log(nutella);

const goiabadaQueijo: PizzaSugar = {
  flavor: 'Goiabada com Queijo',
  slices: 4
};

console.log(goiabadaQueijo);