import inquirer from "inquirer"
import chalk from "chalk";

let todoList = [];
let conditions = true;

console.log(chalk.magenta.bold("\n \t wellcome to Codewithsaeed - Todo-List Application\n"));

while(conditions){
    let addTask = await inquirer.prompt([
        {
           name: "task",
           type: "input",
           message: "Enter your New Task :"
        }
    ]);
    todoList.push(addTask);
    console.log(`${addTask.task} Task added in Todo-List successfully`);

let addMoreTask = await inquirer.prompt([
    {
        name: "addmore",
        type: "confirm",
        message: "Do you want to add more task ?",
        default: "False"
    }
]);
conditions = addMoreTask.addmore
}
console.log("your updated Todo-List", todoList);