const readlineSync = require('readline-sync');
const chalk = require('chalk');

const userName = readlineSync.question(chalk.green('Enter your name please: '));

let progress = 0;

const ques_ans = [
    {
        question: 'How many episodes of Breaking Bad were aired? ',
        answer: '62'
    },
    {
        question: 'Which year was Breaking Bad first aired? ',
        answer: '2008'
    },
    {
        question: "What is Gus Fring's henchman Mike's surname? ",
        answer: 'ehrmantraut'
    },
    {
        question: 'What does DEA stand for? ',
        answer: 'drug enforcement agency'
    },
    {
        question: 'Which area of science does Walt teach at school? ',
        answer: 'chemistry'
    },
    {
        question: 'Name the plant Walt used to poison a child. ',
        answer: 'lily of the valley'
    },
    {
        question: 'Which food does Walt infamously throw onto the roof of his house? ',
        answer: 'pizza'
    },
    {
        question: "Name the famous author of the book Hank reads to discover Walt's true identity. ",
        answer: 'walt whitman'
    },
    {
        question: "What is the name of Skinny Pete's accomplice? ",
        answer: 'badger'
    },
];

const play = (userName) => {
    console.log(chalk.blue('Welcome to the quiz ') + userName);
    console.log(chalk.blue('How well do you know about your favourite TV Series (Breaking Bad)?'));
    console.log(chalk.blue("Let's Start ..."));

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