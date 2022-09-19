import sumar from "./sumador";
import multiplicar from "./multiplicador";
import CalculadoraCadena from "./calculadoraCadena";

const cd= new CalculadoraCadena();

const first = document.querySelector("#primer-numero");
//const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

//const firstMul = document.querySelector("#primer-numeroMul");
//const secondMul = document.querySelector("#segundo-numeroMul");
//const formMul =document.querySelector("#multiplicar-form");
//const divMul= document.querySelector("#resultado-divMul");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = first.value;

  const res= cd.calcularPara(firstNumber);

  div.innerHTML = "<p>" +res +"</p>";
});

//formMul.addEventListener("submit", (event) => {
//  event.preventDefault();
//
//  const firstNumberMul = Number.parseInt(firstMul.value);
//  const secondNumberMul = Number.parseInt(secondMul.value);
//
//  divMul.innerHTML = "<p>" + multiplicar(firstNumberMul, secondNumberMul) + "</p>";
//});
