
/************************************************/
//  Coding Challenge - Quiz Console Game
//
/*************************************************/
/*
Rules/Hints
1. Create a function constructor called Question
2. The constructor Question needs the question itself, answers users can select and the correct answer.
3. Create multiple Questions ala contructor from 1)
4. Store the questions inside an array.
5. Select a random question and log it in the console.
6. Use prompt function to get user's input.
7. Error check for user's answer.
8. Make code private
9. Create function to keep asking questions till user quits.
10.Display score after every round.
*/



(function () {
    let count = 0; let points = 0;
    // 1. Create a function constructor called Question
    // 2. The constructor Question needs the question itself, answers users can select and the correct answer.
    let Question = function (question, answers, correctAnswer) {
        this.question = question,
            this.answers = answers,
            this.correctAnswer = correctAnswer
    };

    //3. Create multiple Questions ala contructor from 1)

    //3a
    let q1 = new Question("What is 3 + 3", ["0: 7", "1: 6", "2: 5"], 1)

    //3b
    let q2 = new Question("Who does Tom Holland Play in the Marvel Universe", ["0: Spiderman", "1: Ironman", "2: The Grinch"], 0)

    //3c
    let q3 = new Question("Which of the services below is not a streaming platform", ["0: Spotify", "1: Youtube", "2: Miniclip"], 2)

    //4. Store the questions inside an array.
    let arsenal = [q1, q2, q3];

    // 5. Select a random question and log it in the console.
    // 6. Use prompt function to get user's input.
    // 7. Error check for user's answer.
    // 8. Make code private
    // 9. Create function to keep asking questions till user quits.
    // 9. Create function to keep asking questions till user quits.
    //10.Display score after every round.

    function run() {
        while (count < arsenal.length) {
            let random = Math.floor(Math.random() * arsenal.length);
            console.log(arsenal[random].question);
            arsenal[random].answers.forEach(function (item) {
                console.log(item)
            })
            let prompts = prompt("What is the answer to this question?\nType the corresponding number to the answer.")
            if (parseInt(prompts) === arsenal[random].correctAnswer) {
                points++;
                console.log(`Correct!, you now have ${points} point(s)`)
            } else {
                console.log(`Incorrect, your current score is ${points} point(s)`);
            }
            count++;
        }
        console.log(`You have a total of ${points} point(s)`);
    }
    run();
})();


