function getFibonacciOfNum() {
    var fibonacci = [1,1];
    for(let i = 1; i < 49; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i]);
    }
    document.getElementById(`answer`).innerText = fibonacci[document.getElementById(`userNum`).value - 1];
}

var isBtn = document.querySelector(`.isBtn`);
isBtn.addEventListener(`click`, getFibonacciOfNum);