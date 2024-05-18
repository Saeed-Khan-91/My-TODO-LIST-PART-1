"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var todoList = [];
var conditions = true;
console.log(chalk_1.default.magenta.bold("\n \t wellcome to Codewithsaeed - Todo-List Application\n"));
while (conditions) {
    var addTask = await inquirer_1.default.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your New Task :"
        }
    ]);
    todoList.push(addTask);
    console.log("".concat(addTask.task, " Task added in Todo-List successfully"));
    var addMoreTask = await inquirer_1.default.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task ?",
            default: "False"
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log("your updated Todo-List", todoList);
