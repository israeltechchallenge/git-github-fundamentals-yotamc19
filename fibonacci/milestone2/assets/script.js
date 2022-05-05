function getFibonacciOfNum(num) {
    var fibonacci = [1,1];
    for(let i = 1; i < 49; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i]);
    }
    return fibonacci[num - 1];
}

var userNum = 8;
var fibonacciNum = getFibonacciOfNum(userNum);
document.getElementById(`userNum`).innerText = userNum;
document.getElementById(`fibonacciNum`).innerText = fibonacciNum;