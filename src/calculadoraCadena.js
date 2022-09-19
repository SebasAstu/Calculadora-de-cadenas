class CalculadoraCadena{
    //generarPara(num){
    //if(num==15)
    //{
    //    return "fizzbuzz";
    //}
    //if(num%3==0)
    //{
    //    return "fizz";
    //}
    //if(num%5==0)
    //{
    //    return "buzz";
    //}
    //return ""+num;
  //}
    calcularPara(cadena){
        let res=0;
        if(cadena!="")
        {
            res= Number.parseInt(cadena);
        }
        return res;
    }
}
export default CalculadoraCadena;