
var CorrectAnswer1 = "Skellington";
var CorrectAnswer2= "Edward";
var CorrectAnswer3= "Green";
var CorrectAnswer4= "Danny";
var Answer= document.getElementById("answers");


document.getElementById("Submit").onclick = function () { 

var Answer1= document.getElementById("Answer1").value;
var Answer2= document.getElementById("Answer2").value;
var Answer3= document.getElementById("Answer3").value;
var Answer4= document.getElementById("Answer4").value;
var NumberCorrect= 0;



document.getElementById("SubmitAnswer1").innerHTML = Answer1;
document.getElementById("SubmitAnswer2").innerHTML = Answer2;
document.getElementById("SubmitAnswer3").innerHTML = Answer3;
document.getElementById("SubmitAnswer4").innerHTML = Answer4;

   if (Answer1 === CorrectAnswer1){NumberCorrect++;}
   if (Answer2 === CorrectAnswer2){NumberCorrect++;}
   if (Answer3 === CorrectAnswer3){NumberCorrect++;}
   if (Answer4 === CorrectAnswer4){NumberCorrect++;}
   if (NumberCorrect>0){
    alert('You got '+ NumberCorrect+ " correct.");
    Answer.style.display= "block"
}
   else {alert("Unfortunately you didn't get any correct.");
    Answer.style.display= "block"
}
}
