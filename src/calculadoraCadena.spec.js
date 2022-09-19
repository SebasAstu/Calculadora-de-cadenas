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
        const resultado = cd.calcularPara("[1,2,3,5,1");
        expect(resultado).toEqual(12);
      });

    it("deberia generar la suma de numeros de dos digitos en una cadena", () => {
        const resultado = cd.calcularPara("[10,2,20");
        expect(resultado).toEqual(32);
      });

    it("deberia generar la suma de numeros de 3 digitos en una cadena", () => {
        const resultado = cd.calcularPara("[1,100,10,200");
        expect(resultado).toEqual(311);
      });

    it("deberia generar la suma debe evitar numeros mayores a 1000 en una cadena", () => {
        const resultado = cd.calcularPara("[999,1,2000,1000,1");
        expect(resultado).toEqual(1001);
      });
    
    it("deberia generar la suma de numeros usando diferentes caracteres", () => {
        const resultado = cd.calcularPara("[999,1-2000ç1000/1");
        expect(resultado).toEqual(1001);
      });

    it("deberia generar la suma de numeros especificando delimitador de caracteres", () => {
        const resultado = cd.calcularPara("//[;] 6;7;4");
        expect(resultado).toEqual(17);
      });

    it("deberia generar la suma de numeros especificando delimitador de cualquier de caracteres en una cadena", () => {
        const resultado = cd.calcularPara("//[***] 1***2***3”");
        expect(resultado).toEqual(6);
      });
  });