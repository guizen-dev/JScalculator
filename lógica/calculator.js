var num = true
var count = ['', '']
var aditionalCount = ''
var expression = undefined
var result = ''


//function that adds the number to the main input
function addNumber(number){
    mainInput = document.getElementById("mainInput");
    if (mainInput.value == '0' && number !== '.'){
        mainInput.value = number
    }else if(mainInput.value == '0' && number == '.'){
        mainInput.value = mainInput.value + number
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
    evalInput()
}

//functiont that handle the expression click
function expressionClick(expression){
    mainInput = document.getElementById("mainInput");
    if(num==true && mainInput.value!=='0'){
        addExpression(expression)
        evalInput()
    }else if(num==false && mainInput.value!=='0'){
        changeExpression(expression)
        evalInput()
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
    expression = undefined
    num = true
    aditionalCount = ''
}

function equalClick(){
    mainInput = document.getElementById("mainInput");
    smallInput = document.getElementById("smallInput");

    mainInput.value = smallInput.value
    smallInput.value = ''
    count[0] = smallInput.value
    count[1] = ''
    expression = undefined
    num = true
    aditionalCount = ''
}


//function that handle the cancel click - cancel the last character 
function cancelClick(){
    mainInput = document.getElementById("mainInput");

    if(mainInput.value.length>1){
        mainInput.value = mainInput.value.substring(0, mainInput.value.length-1);
        if (mainInput.value.slice(-1) == 'x' || mainInput.value.slice(-1) == '+' || mainInput.value.slice(-1) == '-' || mainInput.value.slice(-1) == '÷'){
            num = false
        }else{
            num = true
        }
    }else{
        mainInput.value = '0'
    }
}

function evalInput(){
    mainInput = document.getElementById("mainInput");
    smallInput = document.getElementById("smallInput");

    result = eval(mainInput.value)
    
    if(result !== undefined){
        smallInput.value = result
    }
}