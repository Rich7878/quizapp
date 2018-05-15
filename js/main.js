var questions = [
    {
        question: 'Will Rich make his dreams come true?',
        answer: 'Yes'
    },
    {
        question: 'What is the best season?',
        answer: 'Summer'
    },
    {
        question: 'When is lunch time?',
        answer:'1 pm'
    },
    {
        question:'whats my favorite colors',
        answer:'red and yellow'
    }
];
// for loop the length of the variable questions
for(var i = 0; i < questions.length; i++) {
// make a variable that triggers all the property's question
    var question = questions[i].question;
    //add an elem with the id question[i]
    var el = document.getElementById('question' + [i]);
    console.log(question, el);
    //attach variable question to the el elem
    el.textContent = question;
};

//create a button for the input results
function testResults() {
// create two variables and equal them to zero
    var correct = 0;
    var incorrect = 0;

// for loop  to check the answers of the input
    for(var i = 0; i < questions.length; i++) {
        var answer = questions[i].answer;
        var guess = document.getElementById('answer' + [i]).value;
//if statement to check the input value equals to the answer question 
        if(answer == guess) {
            correct++;   
        } else {
            incorrect++;
        };
    };
    document.getElementById('correct').textContent = correct;
    document.getElementById('incorrect').textContent = incorrect;
};