function add (n1, n2, showresult, phrase){
    return n1 + n2;
    if (showresult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

const number1 = 5
const number2 = 2.8;
const showresult = true;

const resultPhrase = "result is: ";

const result = add(number1, number2, showresult, resultPhrase)

console.log(result)