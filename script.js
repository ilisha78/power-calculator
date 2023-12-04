function calculatePower() {
    // console.log("hlo")
    let number = parseFloat(document.getElementById("number").value);
    let powerValue = parseFloat(document.getElementById("power").value);
    let resultElement = document.getElementById("result");

    if (isNaN(number) || isNaN(powerValue)) {
        resultElement.innerText = "Please enter valid numbers.";
    } else {
        const result = Math.pow(number, powerValue);
        resultElement.innerText = `Result: ${result}`;
    }
    // console.log("hii")
}