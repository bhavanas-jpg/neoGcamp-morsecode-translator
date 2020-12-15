
var btnTranslate = document.querySelector("#btn-translate");
var txtInput     = document.querySelector("#txt-input");
var outputDiv    = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/morse.json";

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Sorry! we have use the max 5 inputs. Try once again approx an hour");
}

function clickHandler(){
    var inputText = txtInput.value; // taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then (response =>response.json())
    .then(json =>{
        var translateText = json.contents.translated;
        outputDiv.innerText = translateText;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)