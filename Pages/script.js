
//--- Variables
var CorrectAnswer1 = "SKELLINGTON";
var CorrectAnswer2= "EDWARD";
var CorrectAnswer3= "GREEN";
var CorrectAnswer4= "DANNY";
var Answer= document.getElementById("answers");

//when the Submit Button is pushed
document.getElementById("Submit").onclick = function () { 

    //These get the text inputs
    var Answer1= document.getElementById("Answer1").value;
    var Answer2= document.getElementById("Answer2").value;
    var Answer3= document.getElementById("Answer3").value;
    var Answer4= document.getElementById("Answer4").value;
    var NumberCorrect= 0;

    //writes the Answers submitted to the webpage
    document.getElementById("SubmitAnswer1").innerHTML = Answer1;
    document.getElementById("SubmitAnswer2").innerHTML = Answer2;
    document.getElementById("SubmitAnswer3").innerHTML = Answer3;
    document.getElementById("SubmitAnswer4").innerHTML = Answer4;

    //tests the answers given against the correct answers
   if (Answer1.toUpperCase() === CorrectAnswer1){NumberCorrect++;}
   if (Answer2.toUpperCase() === CorrectAnswer2){NumberCorrect++;}
   if (Answer3.toUpperCase() === CorrectAnswer3){NumberCorrect++;}
   if (Answer4.toUpperCase() === CorrectAnswer4){NumberCorrect++;}

   //if you got any correct
   if (NumberCorrect>0){
        alert('You got '+ NumberCorrect+ " correct.");
        Answer.style.display= "block"
    }
    //if you got all wrong
   else {alert("Unfortunately you didn't get any correct.");
        Answer.style.display= "block"
    }
}
