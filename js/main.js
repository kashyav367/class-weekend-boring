//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click',check)

function check(){
 const day =  document.querySelector('#day').value

 if(day === "tuesday" || day === "thursday"){
  alert("YOU HAVE CLASS");
 }

 else if(day === "saturday" || day === "sunday"){
  alert("WEEKEND");
 }

 else if(day === "wednesday"){
  alert("HUMPDAY")
 }

 else{
  alert("BORING")
 }
}

  

