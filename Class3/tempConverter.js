function convertTemp (value, unit)
{
    switch(unit)
    {
        case "c":
            convertCF(value);
        break;
        case "F":
            convertFC(value);
        break;        

    }

}
function convertCF(value)
{
    return (9/5) * value +32;
}

function convertFC (value)
{
    return (5/9)* 
}