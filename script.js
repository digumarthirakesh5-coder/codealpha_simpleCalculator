function calculate(op){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let result = 0;

    if(op==="+"){
        result = a + b;
    }else if(op==="-"){
        result = a - b;
    }else if(op==="*"){
        result = a * b;
    }else if(op==="/"){
        result = b !== 0 ? a / b : "Cannot divide by zero";
    }

    document.getElementById("result").innerText = "Result: " + result;
}