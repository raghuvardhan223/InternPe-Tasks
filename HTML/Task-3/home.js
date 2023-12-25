var currentQuestion = 0;
var score = 0;
var quizContainer = document.getElementsByClassName("quiz-container")[0];
var questionElement = document.getElementById("question");
var optionElements = document.getElementById("options").getElementsByTagName("button");
var scoreElement = document.getElementById("score");
var resultElement = document.getElementById("result");
var nextButton = document.getElementById("next-btn");
var prevButton = document.getElementById("prev-btn");

// Sample questions and answers
var questions = [
    {
        
            question: "What does CSS stand for?",
            options: [
                  "Cascading Style Sheets" ,
                  "Computer Style Sheets",   
                  "Creative Style Sheets",   
                  "Colorful Style Sheets"
            ],
            answer: 0,
            selectedOption: null

        
        
    },
    {
        question: "What is the purpose of HTML?",
        options: [
            "Defining the structure and content of web pages",
            "Styling the web pages",
            "Implementing interactive functionality",
            "Communicating with the server"
        ],
        answer: 0,
        selectedOption: null
    },
    
    {
        question: "What does the 'src' attribute specify in an HTML <img> tag?",
        options: [
            "The source file of the image",
            "The alternative text for the image",
            "The size of the image",
            "The caption for the image"
        ],
        answer: 0,
        selectedOption: null
    },
    {
        question: "Which programming language is primarily used for client-side scripting in web development?",
        options: [
            "Java",
            "Python",
            "JavaScript",
            "C#"
        ],
        answer: 2,
        selectOption: null
    },
    {
        question: "What does the acronym 'API' stand for in web development?",
        options: [
            "Application Programming Interface",
            "Advanced Program Integration",
            "Automated Product Interface",
            "Accessible Program Interface"
        ],
        answer: 0,
        selectedOption: null
    }
        
    
];

function loadQuestion() {
    var q = questions[currentQuestion];
    questionElement.innerHTML = q.question;

    for (var i = 0; i < 4; i++) {
        optionElements[i].innerHTML = q.options[i];
        optionElements[i].classList.remove("correct", "wrong","selected");
        optionElements[i].disabled = false;
    }
    if (q.selectedOption === i) {
        optionElements[i].classList.add("selected"); // Apply "selected" class to previously selected option
    }
    optionElements[i].addEventListener("click", function() {
        var selectedOption = this.dataset.option;
        selectOption(selectedOption); // Call the selectOption function passing the selected option
    });
    
    optionElements[i].addEventListener("dblclick", function() {
        this.classList.remove("selected"); // Remove "selected" class on double-click
    });


    scoreElement.innerHTML = "Score: " + score;
    
    if (currentQuestion === 0) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "inline-block";
    }
    
    if(currentQuestion == questions.length -1){
        nextButton.innerHTML = "Submit";
    }
    else{
        nextButton.innerHTML = "Next";
    }

    nextButton.disabled = true;

    
}




function checkAnswer(option) {
    var q = questions[currentQuestion];
    if (option === q.answer) {
        score++;
        optionElements[option].classList.add("correct");
    } else {
        optionElements[option].classList.add("wrong");
        optionElements[q.answer].classList.add("correct");
    }

    for (var i = 0; i < 4; i++) {
        optionElements[i].disabled = true;
    }

    nextButton.disabled = false;
    optionElements[option].classList.add("selected");
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}
function prevQuestion() {
    if(currentQuestion > 0){
        currentQuestion--;
        loadQuestion();
    }
}

function showResult() {
    quizContainer.innerHTML = "<h1>Quiz Completed!</h1><p>Your score: " + score + "</p>";
    resultElement.innerHTML = "<h2>Correct Answers:</h2>";
    for (var i = 0; i < questions.length; i++) {
        resultElement.innerHTML += "<p>" + questions[i].question + " - " + questions[i].options[questions[i].answer] + "</p>";
    }
}

// Start the quiz
loadQuestion();
