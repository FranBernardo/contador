const res = document.getElementById("resposta");


let numero = 0;
res.innerHTML = numero;


function soma(){
  
const res = document.getElementById("resposta");
 
res.innerHTML = ++numero;

}


function menos(){
  const res = document.getElementById("resposta");
 
res.innerHTML = --numero;
}
function resert(){
  const res = document.getElementById("resposta");
 
res.innerHTML = numero = 0;
}

