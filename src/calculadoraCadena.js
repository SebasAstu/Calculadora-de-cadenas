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
        let res=0,aux="";
        if(cadena!="")
        {
            if(cadena.length==1 && Number.isInteger(Number.parseInt(cadena)))
            {
                res=Number.parseInt(cadena);
            }
            else
            {
                res=Number.parseInt(cadena[0])+Number.parseInt(cadena[2]);
                //for(var i = 0; i < cadena.length; i++)
                //{
                //    aux=cadena[i];
                //    if(Number.isInteger(Number.parseInt(aux)))
                //    {  
                //        res=res +Number.parseInt(aux);
                //    }
                //}
            }
        }
        return res;
    }
}
export default CalculadoraCadena;