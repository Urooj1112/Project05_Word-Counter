#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.greenBright("\n \t\tProject-06 Word Counter"));
console.log("*************************************");

let answers = await inquirer.prompt(
    [
        {
            name:"sentence",
            type:"input",
            message:"Enter Words Or Sentence: ",
        }
    ]
);

let words = answers.sentence.trim().split(" ");
console.log("*************************************");
console.log(chalk.bold("Sentence words: "));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.greenBright(words.length)}`));
console.log("*************************************");