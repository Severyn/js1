//1 stwotiujemo zapyt pytan za dopomohoju masywu i funkcji
//stwotworiujemo masyw dla wywodu widpowidej
var answer = new Array()
//masyw w jakomu majemo zapytannia
var question = ["Please enter your name", "Please enter event which one you like to visit", "Please enter time", "Please enter place"]


//функція якою формуємо вивід відповіді
function wyklyk() {
    for (var i = 0; i < question.length; i++) {
        var zapyt = prompt(question[i]);
        answer.push(zapyt);
    };
};
//запускаємо програму
wyklyk();

var catEl = document.createElement("p");
style = catEl.style

style.color = "blue";
style.display = "flex";
style.justifyContent = "center";
style.alignItems = "center";
style.padding = "10px";

catEl.innerHTML = answer[0] + " wants to visit " + answer[1] + " about " + answer[2] + " at the " + answer[3];

var div = document.createElement("div");

style = div.style

style.border = "5px solid black";
style.width = "auto";
style.height = "auto";
style.position = "absolute";
style.left = "35%";
style.top = "20%";
style.justifyContent = "center";
style.alignItems = "center";


div.appendChild(catEl);
document.body.appendChild(div);

//2 
var euro = prompt("EURO");

euro = euro;

var dolar = prompt("DOLAR");

dolar = dolar;


var valuta = document.createElement("p");
style = valuta.style
style.color = "red";
style.display = "flex";
style.justifyContent = "center";
style.alignItems = "center";
style.padding = "10px";

valuta.innerHTML = euro + " euros are equal " + euro * 30.23 + " grn, " + dolar + " dollars are equal " + dolar * 26.10 + " grn, " +
    " one euro is equal 1.074 dollars. ";



var block = document.createElement("block");

style = block.style

style.border = "5px solid black";
style.width = "auto";
style.height = "auto";
style.position = "absolute";
style.left = "35%";
style.top = "50%";

block.appendChild(valuta);
document.body.appendChild(block);
