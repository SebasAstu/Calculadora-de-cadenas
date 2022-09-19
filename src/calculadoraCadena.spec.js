import CalculadoraCadena from "./calculadoraCadena";

const cd= new CalculadoraCadena();

describe("Calculadora de una cadena", () => {
    
    it("deberia generar 0 si la cadena es vacia", () => {
        const resultado = cd.calcularPara("");
  
        expect(resultado).toEqual(0);
      });

    it("deberia generar el mismo numero 1 que no tiene regla", () => {
        const resultado = cd.calcularPara("1");
  
        expect(resultado).toEqual(1);
      });

    //it("deberia generar sumar dos numeros ", () => {
      //  const resultado = cd.calcularPara("1,2");
      //  expect(resultado).toEqual(3);
      //});
  });