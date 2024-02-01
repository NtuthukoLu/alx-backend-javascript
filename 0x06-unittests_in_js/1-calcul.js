function calculateNumber(type, num1, num2)
{
    a = Math.round(num1);
    b = Math.round(num2);
    
    if (type !== "SUM" && type !== "SUBTRACT" && type !== "DIVIDE")
    return ("Error");
    if (typeof type !== "string")
    return ("Error");

    if(type === 'SUM')
    {
        return( a + b);
    }
    else if (type === 'SUBTRACT')
    {
        return ( a - b);
    }
    else if (type === 'DIVIDE')
    {
        if ( b === 0 )
        {
            return('Error');
        }
        else
        {
            return ( a / b);
        }
    }

}
module.exports = calculateNumber;