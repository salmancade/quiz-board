// (document).ready(function() {
//         $("button#hello").click(function() {
//           $("ul").prepend("<li>Hello!</li>");
//         });
//
//         $("button#goodbye").click(function() {
//           $("ul").prepend("<li>Goodbye!</li>");
//         });
//
//         $("button#stop").click(function() {
//           $("ul").prepend("<li>Stop copying me!</li>");
//         });
//       });
//


var quiz_topic = "javascript"; //Topic name for Quiz
var curr_index = -1;
var score = 0;//Saves total score
var scores = []//Saves cumulative score for individual questions

//Store all questions in an array
var questions=[
  {
    question: "1.What is javascript?",
    choices: ["scripting language","language", "none"],
    answer: "scripting language",
  },
  {
  question: "2.is javascript similar to java?",
  choices: ["No","yes", "no idea"],
  answer: "No",
  },
  {
  question: "3.can javascript be used to build applications?",
  choices: ["yes","it depends","No"],
  answer: "yes",
  },
]

$(document).ready(function () {
  $("#question1").text(questions[0].question);
  $("#question2").text(questions[1].question);
  $("#question3").text(questions[2].question);
});

// $(document).ready(function() {
//         $("button#hello").click(function() {
//           $("ul#user").prepend("<li>Hello!</li>");
//           $("ul#webpage").prepend("<li>Why hello there!</li>");
//         });
//
//         $("button#goodbye").click(function() {
//           $("ul#user").prepend("<li>Goodbye!</li>");
//           $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
//         });
//
//         $("button#goodbye").click(function(){
//           $("body").addClass("green");
//         });
//
//         $("button#stop").click(function() {
//           $("ul#user").prepend("<li>Stop copying me!</li>");
//           $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
//         });
//       });
