var button = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

var apiUrl = "https://api.funtranslations.com/translate/roman-numerals.json";

function getUrl(input) {
    return apiUrl + "?" + "text=" + input;
}
var catchError = (error) => {
    console.log("error occured", error);
    alert("server is down! please try after some time");
}
function clickHandler() {
    fetch(getUrl(txtInput.value))
        .then(response => response.json())
        .then(json => {
            var output = json.contents.translated;
            txtOutput.innerText = output;
        })
        .catch(catchError)
}

button.addEventListener("click", clickHandler)