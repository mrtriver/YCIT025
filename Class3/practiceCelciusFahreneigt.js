



function convertTemp(value, unit)
{
    let tempResult = 0.00;

    switch (unit)
    {
    case "C" : 
        tempResult = convert_C_to_F(value);
    break;
       
    case "F" :
        tempResult = convert_F_to_C(value);
        break;
    }
    return tempResult;
    

}
    function convert_C_to_F(value)
    {
        return (9/5) * value + 32;    //Here direct return
    }
       
   
    function convert_F_to_C(value)
    {
        let c ;     
        c= (5/9) * (value - 32);    
           return c;                 //Also be returned from a variable
    }




console.log(convertTemp(41, "F"));
    

