function mainFunction(callback) {
    const num1 = +prompt('Enter the 1st number');
    const num2 = +prompt('Enter the 2nd number');
    
    if (!isInteger(num1)) return alert ('The 1st number is not valid');
    if (!isInteger(num2)) return alert ('The 2nd number is not valid');
    callback(num1, num2);
}

const isInteger = function(arg) {
    return typeof arg === 'number' && !isNaN(arg) ? true : false;
}

function exponentiation(num, exp) {
    const result = Math.pow(num, exp);
    alert(result);
}

function mult(num1, num2) {
    const result = num1 * num2;
    alert(result);
}

function div(num1, num2) {
    const result = num1 / num2;
    alert(result);
}

function mod(num1, num2) {
    const result = num1 % num2;
    alert(result);
}

mainFunction(exponentiation);
mainFunction(mult);
mainFunction(div);
mainFunction(mod);