const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numberSet = "0123456789"
const symbolSet = "~!@#$%&*()_/?"

const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const lowerInput = document.getElementById("lower-case")
const upperInput = document.getElementById("upper-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")

const getRandom = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
}

const generatePass = (password = "") => {
    if (lowerInput.checked) {
        password += getRandom(lowerSet)
    }
    if (upperInput.checked) {
        password += getRandom(upperSet)
    }
    if (numberInput.checked) {
        password += getRandom(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandom(symbolSet)
    }

    if (password.length < totalChar.value){
        return generatePass(password)
    }

    passBox.innerText = turncateString(password, totalChar.value)
}


function turncateString(str,num){
    if(str.length > num){
        let subStr = str.substring(0,num);
        return subStr;
    } else {
        return str;
    }
}

const stepper = (btn) => {
    let id = btn.getAttribute("id");
    let min = totalChar.getAttribute("min");
    let max = totalChar.getAttribute("max");
    let step = totalChar.getAttribute("step");
    let val = totalChar.value;

    let calcStep = (id == "increment") ? (step * 1) : (step * -1);

    let newValue = parseInt(val) + calcStep;

    if(newValue >= min && newValue <= max){
        totalChar.setAttribute("value", newValue);
    }
}