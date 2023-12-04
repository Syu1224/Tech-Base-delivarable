result = document.getElementById("result")

//Cボタン
function clearAll(){
    result.value = "";
}

//数字と=以外の記号ボタン
function append(value){
    result.value+=value;
}

//=ボタン
function calculate(){
    if(eval(result.value)=="Infinity"){
        result.value = "error"
    }else{
        result.value=eval(result.value);
    }
}