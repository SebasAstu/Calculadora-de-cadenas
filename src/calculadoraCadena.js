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
        var i=0;
        if(cadena!="")
        {
            if(cadena.length==1 && Number.isInteger(Number.parseInt(cadena)))
            {
                res=Number.parseInt(cadena);
            }
            else
            {
                //res=Number.parseInt(cadena[0])+Number.parseInt(cadena[2]);
                for(i; i < cadena.length; i++)
                {
                    aux=cadena[i];
                    if(Number.isInteger(Number.parseInt(aux)))
                    {  
                        if(Number.isInteger(Number.parseInt(cadena[i+1])) && Number.isInteger(Number.parseInt(cadena[i+2]))){
                            aux=aux+cadena[i+1]+cadena[i+2];
                            i=i+2;      
                        }
                        if(Number.isInteger(Number.parseInt(cadena[i+1])) && Number.isNaN(Number.parseInt(cadena[i+2])))
                        {
                            aux=aux+cadena[i+1];
                            i=i+1;
                        }
                        else(Number.isNaN(Number.parseInt(cadena[i+1])))
                        {
                            res=res +Number.parseInt(aux);
                        }
                        
                    }
                }
            }
        }
        return res;
    }
}
export default CalculadoraCadena;