// display content in calaculator screen
function displayContent(content){
    result.value += content
}

// clear calculator screen
function calcScreenClear(){
    result.value =""
}
function calcOutput(){
    result.value = eval(result.value)
}
function removeLastDigit(){
    result.value = result.value.slice(0,-1)
}