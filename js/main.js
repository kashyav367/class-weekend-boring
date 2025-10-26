// //Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check(){

 let day =  document.querySelector('#day').value
 
 day = day.toLowerCase();

 let message = "";

 if(day === "tuesday" || day === "thursday"){
  message = "YOU HAVE CLASS"
 }
 else if(day === "wednesday"){
  message = "Humpday — halfway there!"
 }
 else if(day === "saturday" || day === "sunday"){
  message = "WEEKEND"
 }
 else{
 message = "BORING"
 }


 document.querySelector('#placeToSee').textContent = message;
}