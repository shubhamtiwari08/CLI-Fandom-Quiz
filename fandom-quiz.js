var readlinesync = require("readline-sync")
var score = 0

function Welcome() {
    var userName = readlinesync.question("hello! what is your name ? ")
    console.log("welcome ! " + userName + " let's play a quiz on TMKOC ")
}

function play(question, answer) {
    var userAnswer = readlinesync.question(question)
    if (userAnswer === answer) {
        console.log("yes! you are correct !")
        score = score + 1
    } else {
        console.log("oops! you are wrong!")
        score = score - 1
    }
    console.log("current score : " + score)
    console.log("___________")
}

var highscores = [
    { name: "Jetha", score: 6 },
    { name: "tappu", score: 5 }
]


var questions = [
    {
        question: `1. who among the following is the working woman of gokuldham society?
  a) Anjali
  b) Madhavi
  c) Daya
  d) Roshan
 (**answer just whether a/b/c/d, don't write full option**)
 `,
        answer: "b"
    },
    {
        question: `2.which character from the following was trapped in online scam once?
  a) Jetha
  b) Tarak
  c) Sodhi
  d) Bhide
  `,
        answer: "d"
    },
    {
        question: `3.who is not an employee at Gada electronics?
  a) Nattu kaka
  b) Magan
  c) Mawri
  d) Bagha
  `,
        answer: "c"
    },
    {
        question: `4.where is Babita from?
  a) Bengal
  b) bihar
  c) Tamil nadu
  d) Uttrakhand
  `,
        answer: "a"
    },
    {
        question: `5.By what name sundar's contact no. is saved in jethalal's mobile?
  a) chhoti daya
  b) Panchat
  c) Topi
  d) Panoti
  `,
        answer: "d"
    },
    {
        question: `6.where is gada electronics located?
  a) Malad
  b) Worli
  c) Goregaon
  d) Andheri
  `,
        answer: "d"
    }
]

function game() {
    for (i = 0; i < questions.length; i++) {
        var currentquestion = questions[i]
        play(currentquestion.question, currentquestion.answer)
    }
}

function showscore() {
    console.log("yay! you scored :" + score)
    console.log("checkout the highscores below -")
    highscores.map(score => console.log(score.name, " : ", score.score))
}


Welcome()
game()
showscore()