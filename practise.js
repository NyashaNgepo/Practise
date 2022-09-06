document.getElementById(demo).innerHTML="Javascript" 
document.getElementById('demo').style.fontSize="35px";
document.getElementById('demo').style.color="blue";
document.getElementById('demo').innerHTML=10+10;

function calculate(currentYear,yearBorn){
    var currentYear=document.getElementById("current").value;
    var yearBorn= document.getElementById("born").value;
    var age= currentYear-yearBorn;
    console.log("You are"+age+"years old")
}