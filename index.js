var myQuestions = [
    {
        question: "In which element do we put in Javascript code?",
        answers: {
          a: 'js',
          b: 'script',
          c: 'body',
          d:'link'
        },
        correctAnswer: 'c'
      },


    {
      question: "Which HTML atribute is used to reference an external Javascript file",
      answers: {
        a: 'js',
        b: 'script',
        c: 'body',
        d:'link',
      },
      correctAnswer: 'b'
    },
    {
        question: 'How would you write "Hello" in an alert box?',
        answers: {
          a: 'msg ("Hello")',
          b: 'alertBox("Hello")',
          c: 'document.write("Hello")',
          d:'alert("Hello")'
        },
        correctAnswer: 'd'
      },
      {
        question: 'Javascript is directly related to the "Java" programming language. This statement is',
        answers: {
          a: 'true',
          b: 'false',
        },
        correctAnswer: 'b'
      },
      {
        question: 'A variable in Javascript must start with which special character ',
        answers: {
          a: '@',
          b: '#',
          c: '$',
          d:'No Special Character'
        },
        correctAnswer: 'c'
      },
      
  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }
  
  