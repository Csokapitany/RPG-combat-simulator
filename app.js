const KarakterFeltotlto = document.querySelector('#KarakterFeltotlto');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

const charName = document.querySelector('#charName');
const KezdoAlap = document.querySelector('#KezdoAlap');
const TamadoAlap = document.querySelector('#TamadoAlap');
const VedoAlap = document.querySelector('#VedoAlap');
const CelzoAlap = document.querySelector('#CelzoAlap');

const Fegyver1Neve = document.querySelector('#Fegyver1Neve');
const sebzes1 = document.querySelector('#sebzes1');
const SebzesMod = document.querySelector('#SebzesMod');

const Kezdo1 = document.querySelector('#Kezdo1');
const Tamado1 = document.querySelector('#Tamado1');
const Vedo1 = document.querySelector('#Vedo1');
const Celzo1 = document.querySelector('#Celzo1');
const Tamadaskor1 = document.querySelector('#Tamadaskor1');

loadEventListeners();
function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', getmentes)
  KarakterFeltotlto.addEventListener('submit', addcharName);
   // taskList.addEventListener('click', removeTask);
  //  clearBtn.addEventListener('click', clearTaasks);
  //  filter.addEventListener('keyup',  filterTasks);
  } 

  function getmentes(){
    let mentes;
if(localStorage.getItem('charName')=== null){
  mentes =[];}
  else{
mentes = JSON.parse(localStorage.getItem('mentes'));
}
mentes.forEach(function(mentes){
const li = document.createElement('li');

li.className= 'KariLista-item';
li.appendChild(document.createTextNode(mentes));
const link = document.createElement('a');
link.className = 'delete-item secondary-content'; 
link.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(link);
KarakterFeltotlto.appendChild(li);
storeCharInLocal(charName.value +' KE: '+ KezdoAlap.value +' TE: '+ TamadoAlap.value +' VE: '+VedoAlap.value)
});
}


function addcharName(e){
if(charName.value === '' || KezdoAlap.value === '') {
  alert ('Add Character Values'); 
} 
const li = document.createElement('li');

li.className= 'KariLista-item';
li.appendChild(document.createTextNode
  (charName.value +' KE: '+ KezdoAlap.value +' TE: '+ TamadoAlap.value +' VE: '+ VedoAlap.value));
const link = document.createElement('a');
link.className = 'delete-item secondary-content'; 
link.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(link);
KarakterFeltotlto.appendChild(li);

storeCharInLocal(charName.value +' KE: '+ KezdoAlap.value +' TE: '+ TamadoAlap.value +' VE: '+VedoAlap.value)

// charName.value = '';

e.preventDefault();
}

function storeCharInLocal(charName){
let mentes;
if(localStorage.getItem('charName')=== null){
  mentes =[];}
  else{
mentes = JSON.parse(localStorage.getItem('mentes'))
console.log(mentes);}

mentes.push(charName)
localStorage.setItem('mentes', JSON.stringify(mentes));
}

//innen dobas

// function generateRandomInteger(max) {
//   return Math.floor(Math.random() * max) + 1;
// }

// let K100 = generateRandomInteger(100);
// //console.log("A tamado dobas eredmenye " + K100);
// let K100bal = generateRandomInteger(100);

// let K10 = generateRandomInteger(10);
// console.log("Kezdmenyezo: "+ charName.value, KezdoAlap.value + K10);
// //console.log("Kezdmenyezo bal: "+ karakter.CharName, karakter.Kebalkez+K10 );

// //let K10bal = (generateRandomInteger(10)+2);

// let K6 = generateRandomInteger(6);
// console.log("A hatdalu eredmenye " + K6);

// let K10meg2 = (generateRandomInteger(10)+2);

// if (K100 > 1 && K100 < 100){
 
//   console.log("Tamado: "+ charName, TamadoAlap.value + K100 ) 
//   //onsole.log("Tamado bal kezzel: "+ karakter.CharName, karakter.Tealap+K100bal ) 
//   //console.log("Lancos buzogany Sebzes : "+ karakter.CharName, 3+K6)
// }
// else if (K100 < 100){
//    console.log ("Balsiker") 
// }

//  else{
//   console.log ("DUPLANULLA =3EP 6FP "+ charName.value, TamadoAlap.value +K100) } 

// console.log("Hosszu kardsebzes: "+ charName, +K10meg2 );
// //console.log("Hosszu kard balkez sebzes: "+ karakter.CharName, +K10bal )

// const massage = 'Dobjal mar!';

// var button = document.getElementById('D6').addEventListener('click', buttonClick);

// function buttonClick()    {
//   console.log(generateRandomInteger(6));
 

// };
// var output6 = document.getElementById('#D6');
//   output6.innerHTML = `<h3> ${D6} </h3>`;
// var outd6 = document.getElementById('#kiir');

// console.log (karakter);

// let valtozo = "Szoveg Ezt irdki";
// let dice6 = 6
// let n=0
// function K6 (roll) {
//  roll = (Math.random * dice6)+1;

// console.log (roll);

// };
// function D6() {
//   let K=parseInt(document.getElementById("k"))

// for (let n=0, n<dice6, n++)
// {
//    sum += parseInt(Math.floor(Math.random() * 999999) % i + 1);
//      }
  
//   eredmeny = (Math.random)+1
//   alert (eredmeny)

// };

// function Dobas() {
//   var k = parseInt(document.getElementById("k").value.substr(1));
//   var darab = parseInt(document.getElementById("darab").value);
//   darab = darab || 1;
//   var elojel = document.getElementById("elojel").value;
//   var bonusz = parseInt(document.getElementById("bonusz").value);
//   bonusz = bonusz || 0;
//   var elozo = document.getElementById("elozo").value;
//   var sum = 0;
  
//   // Kockadobások kiszámítása
//   for(var i = 0; i<darab; i++) {
//       sum += parseInt(Math.floor(Math.random() * 999999) % k + 1);
//   }
  
//   // Megfelelő bónusz hozzáadása
//   if(elojel == "+")
//       sum += parseInt(bonusz);
//   else
//       sum -= parseInt(bonusz);
      
//   document.getElementById("eredm").innerHTML = sum;
//   document.getElementById("elozo").innerHTML = darab + "k" + k + " " + ((bonusz == 0) ? "" : (elojel + " " + bonusz)) + " = <b>" + sum + "</b><br />" + document.getElementById("elozo").innerHTML;
  
//   var str = document.getElementById("elozo").innerHTML;
//   var sorokSzama = 5;
  
//   if(str.split('br').length-1 >= sorokSzama) {
//       lastIndex = str.lastIndexOf("br");
//       document.getElementById("elozo").innerHTML = str.substr(0, lastIndex-1);
//   }

// function character ();
//    class ()
// ;
// (function (){
//     alert("Koszi Pici")
// })();
// function na(valtozo) {
//     alert (valtozo)

// };
// function osszeadas (a,b){
//     alert (a+b)
// }
// function szin (){
//   let x = document.getElementById("t")
// //   x.style.color ="green";
// x.style.display="none";