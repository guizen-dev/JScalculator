var num = true
var count = ['', '']
var aditionalCount = ''
var expression = ''
var result = ''


//function that adds the number to the main input
function addNumber(number){
    mainInput = document.getElementById("mainInput");
    if (mainInput.value == '0'){
        mainInput.value = number
    }else{
        mainInput.value = mainInput.value + number;
    }
    num = true
}


//function that adds the expression to the main input
function addExpression(expression){
    mainInput = document.getElementById("mainInput");
    mainInput.value = mainInput.value + expression;
    num = false
}

//function that changes the expression in the main input
function changeExpression(expression){
    mainInput = document.getElementById("mainInput");

    mainInput.value = mainInput.value.slice(0, -1) + expression
}

//function that handles the numbers click
function numberClick(number) {
    addNumber(number)
    getInputData(number, '')
}

//functiont that handle the expression click
function expressionClick(expression){
    mainInput = document.getElementById("mainInput");
    if(num==true && mainInput.value!=='0'){
        addExpression(expression)
        getInputData('', expression)
    }else if(num==false && mainInput.value!=='0'){
        changeExpression(expression)
        getInputData('', expression)
    }
}

//function that handle the AC click - zerify the mainInput
function cleanInputs(){
    mainInput = document.getElementById("mainInput");
    smallInput = document.getElementById("smallInput");
    mainInput.value = '0'
    smallInput.value = ''
    count[0] = ''
    count[1] = ''
    expression = ''
    num = true
}


//function that handle the cancel click - cancel the last character 
function cancelClick(){
    mainInput = document.getElementById("mainInput");

    if(mainInput.value.length>1){
        mainInput.value = mainInput.value.substring(0, mainInput.value.length-1);
    }else{
        mainInput.value = '0'
    }
    num = true
}

function getInputData(num, exp){

    if (result !== ''){

        if(num === ''){
            expression = exp
        }
    
        if(exp == ''){
            count[0] = count[0] + num
    
        }else{
            count[1] = count[1] + num
        }

        if(count[0] !== '' && count[1] !== ''){
            console.log(count[0])
            console.log(expression)
            console.log(count[1])
            calculate(false)
        }
    }else{
        if (num !== ''){
            aditionalCount = aditionalCount + num
        }else if(exp !== ''){
            expression = exp
        }

        if(aditionalCount !== '' && expression !== ''){
            console.log(result)
            console.log(expression)
            console.log(aditionalCount)
            calculate(true)
        }

    }
}

function calculate(isResultValid){
    smallInput = document.getElementById("smallInput");

    if(isResultValid){
        if(expression=='+'){
            result = result + parseFloat(aditionalCount)
        }if(expression=='-'){
            result = result - parseFloat(aditionalCount)
        }if(expression=='x'){
            result = result * parseFloat(aditionalCount)
        }if(expression=='÷'){
            result = result / parseFloat(aditionalCount)
        }
    }else{
        if(expression=='+'){
            result = parseFloat(count[0]) + parseFloat(count[1])
        }if(expression=='-'){
            result = parseFloat(count[0]) - parseFloat(count[1])
        }if(expression=='x'){
            result = parseFloat(count[0]) * parseFloat(count[1])
        }if(expression=='÷'){
            result = parseFloat(count[0]) / parseFloat(count[1])
        }
    }

    smallInput.value = result.toString()
}