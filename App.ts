    function add(n1: number, n2: number){
        return n1 + n2;
    }

    function printresult(num: number){
        console.log('Result: ', num);
    }

    printresult(add(5,12));

    let combinedvalues = add;

    console.log(combinedvalues(10, 20)); // Outputs: 30