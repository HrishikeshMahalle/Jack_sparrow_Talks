const readlineSync = require('readline-sync');
const chalk = require('chalk');

const userName = readlineSync.question(chalk.green('Enter your name please: '));

let progress = 0;

const ques_ans = [
    {
        question: 'BUT PIRATE IS IN YOUR BLOOD, BOY, SO YOU WILL HAVE TO _________ SOME DAY. Complete the sentence',
        answer: 'confess'
    },
    {
        question: 'Which year did we Pirates had our First Movie? ',
        answer: '2003'
    },
    {
        question: "What's captain Jack sparrow's real First Name? ",
        answer: 'jonny'
    },
    {
        question: 'HOW MANY CREWMEMBERS DOES CAPTAIN JACK SPARROW EMPLOY OUT OF TORTUGA?',
        answer: '12'
    },
    {
        question: 'What is cpt.Jack sparrows First ships name ',
        answer: 'barnacle'
    },
    {
        question: 'Who wrote Pirates of the Caribbean Dead man tells no Tale?',
        answer: 'jeff nathanson'
    },
    {
        question: 'Fathers name of cpt.Jack sparrow?',
        answer: 'cpt edward teague'
    },
    {
        question: "which ship was cpt.Jack sparrow born? ",
        answer: 'tycoon'
    },
    {
        question: "What is Black peral ",
        answer: 'ship'
    },
];

const play = (userName) => {
    console.log(chalk.blue('Welcome Aboart, please wear Your pirate hat ') + userName);
    console.log(chalk.blue('How Good pirate are YOU?'));
    console.log(chalk.blue("Tune UP, Captian!!!!!!!!! here we are comming"));

    ques_ans.map(qa => {
        let answer = readlineSync.question(chalk.green(qa.question));
        if(answer.toLowerCase() === qa.answer) {
        progress += 1;
        console.log(chalk.green('Bulls eye'));
        console.log(chalk.blue('Your score so far: ') + String(progress));
        } else {
        console.log(chalk.red("Wrong Answer !!"));
        console.log(chalk.blue('Your score so far: ') + String(progress));
        }
    });

    if(progress === 3) {
        console.log(chalk.yellow('Excellent'));
        console.log("🎉🎉🎉")
    }
}

play(userName);
