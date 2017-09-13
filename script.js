
//1
var name = prompt("Please enter your name");
var time = prompt("Please enter time");
var place = prompt("Please enter place");
var event = prompt("Please enter event which one you like to visit");

var catEl = document.createElement("p");
     style = catEl.style
     
     style.color = "blue";
     style.display = "flex";
     style.justifyContent ="center";
     style.alignItems = "center";
     style.padding = "10px";

      catEl.innerHTML = name + " wants to visit " + event + " about " + time + " at the " + place ;
     


var div = document.createElement("div");
    
      style = div.style
    
        style.border = "5px solid black";
        style.width = "auto";
        style.height = "auto";
        style.position = "absolute";
        style.left = "35%";
        style.top = "20%";
        style.justifyContent ="center";
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
     style.justifyContent ="center";
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
      style.top = "32%";
 
 block.appendChild(valuta);
     document.body.appendChild(block);