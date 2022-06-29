let quiz = [
    {
        ques : "Who is india's first prime minister ?",
        A : "Narendra modi",
        B : "Jawaharlal nehru",
        C : "Motilala nehru",
        D : "Rahul gandhi",
        correct : "b"
    },
    {
        ques : "Which planet is known as red planet ?",
        A : "mars",
        B : "venus",
        C : "earth ",
        D : "pluto",
        correct : "a"
    },
    {
        ques : "Which is planet is known as blue planet ?",
        A : "mercury",
        B : "jupiter",
        C : "earth",
        D : "saturn",
        correct : "c"
    },
    {
        ques : "Which planet is nearest to the sun ?",
        A : "mercury",
        B : "jupiter",
        C : "mars",
        D : "neptune",
        correct : "a"
    }
]
let quest = document.getElementById("head")
let op1 = document.getElementById("ab");
let op2 = document.getElementById("bc");
let op3 = document.getElementById("cd");
let op4 = document.getElementById("da");
let currentque=0;
var valueOfco;
loadq();
function loadq(currentq){
    const quizd = quiz[currentque];
    quest.innerText = quizd.ques;
    op1.innerText = quizd.A;
    op2.innerText = quizd.B;
    op3.innerText = quizd.C;
    op4.innerText = quizd.D;
    valueOfco = quizd.correct;
}
const button = document.getElementById("button");
let real = undefined;

button.addEventListener("click",function lo(){
 
    {
    currentque++;
    if(currentque<quiz.length ){
        loadq();
    }
    else{
 
        html();
        
    }
}
});
function radi(){
const rad = document.getElementsByName("ok");
for(var i=0;i<rad.length;i++)
{
    if(rad[i].checked)
    real = rad[i].id;
    }
    // return real;
}


var unc = document.getElementsByName("ok");
function unchecked(){
    for(var i=0;i<unc.length;i++)
    {
        unc[i].checked = false;
    }
   
}

var score = 0;
function co(){
    radi();
    if(real === valueOfco){
        score++;
    }  
}
function html(){
    const after = document.getElementById("quiz");
    after.innerHTML= ("Your score is "+ score);
    after.style.textAlign = "center";
    after.style.fontWeight = "bolder";
    after.style.fontSize = "35px";   

}

