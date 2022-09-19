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

    it("deberia generar la sumaa dos numeros de una cadena", () => {
        const resultado = cd.calcularPara("1,2");
        expect(resultado).toEqual(3);
      });

    it("deberia generar la sumaa de varios numeros de una cadena", () => {
        const resultado = cd.calcularPara("[1,2,3");
        expect(resultado).toEqual(6);
      });

    it("deberia generar la suma de numeros de dos digitos en una cadena", () => {
        const resultado = cd.calcularPara("[10,2,20");
        expect(resultado).toEqual(32);
      });

    it("deberia generar la suma de numeros de 3 digitos en una cadena", () => {
        const resultado = cd.calcularPara("[1,100,10");
        expect(resultado).toEqual(111);
      });
  });