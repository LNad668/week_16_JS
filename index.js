
function sumInpput() {
    let numbers = [];

    while (true) {
        let input = +prompt("Введите число");
        if (input === 0 || Number.isNaN(input))
            break;
        numbers.push(+input);
    }

    document.getElementById("result").innerHTML = numbers;

    function sortFunction() {
        numbers.sort(function (a, b) {
            return a - b;
        });

        
    }
    document.getElementById(result_increase).innerHTML = numbers;

    sortFunction();
    let sumArray = 0;
    for (let Number of numbers) {
        sumArray = sumArray + number;
    }

    document.getElementById("result_sum").innerHTML = sumArray;
    return sumArray;
}
sumInpput();