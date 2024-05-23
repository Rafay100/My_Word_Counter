#! /usr/bin/env node

import inquirer from "inquirer";

const ans: {
    Sentence: string
}= await inquirer.prompt([
{
    name: "Sentence" ,
    type: "input",
    message: "Enter your sentence to count the word: "
}

])

const words = ans.Sentence.trim().split(" ")

console.log(words)
console.log(`Your sentence word count is ${words.length}`);
