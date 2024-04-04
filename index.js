import chalk from "chalk";
import inquirer from "inquirer";
//inquirer
//array
//function
//operators
let todos = [];
async function createTodo(todos) {
    do {
        let answers = await inquirer.prompt({
            type: "list",
            message: (chalk.bgBlue("select an operation")),
            name: "select",
            choices: [
                "Add Task",
                "Update Task",
                "View List",
                "Delete Task",
                "exit"
            ],
        });
        if (answers.select == "Add Task") {
            let addtodo = await inquirer.prompt({
                type: "input",
                message: (chalk.bgCyan("Add items in the list")),
                name: "todo",
            });
            todos.push(addtodo.todo);
            todos.forEach(todo => console.log(todo));
            console.log(todos);
        }
        ;
        if (answers.select == "Update Task") {
            let updatetodo = await inquirer.prompt({
                type: "list",
                message: (chalk.bgGreen("Update items in the list")),
                name: "todo",
                choices: todos.map(item => item)
            });
            let addtodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: (chalk.bgGray("Add items in the list")),
            });
            let newTodo = todos.filter(val => val !== updatetodo.todo);
            todos = [...newTodo, addtodo.todo];
            todos.forEach(todos => console.log(todos));
            console.log(todos);
        }
        if (answers.select == "View List") {
            console.log(chalk.yellow("******* To Do List *******"));
            todos.forEach(todos => console.log(todos));
            console.log(todos);
            console.log(chalk.bgMagenta("*********Done*******"));
        }
        ;
        if (answers.select == "Delete Task") {
            let DeleteTodo = await inquirer.prompt({
                type: "list",
                message: (chalk.bgCyanBright("Update items in the list")),
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== DeleteTodo.todo);
            todos = [...newTodo];
            todos.forEach(todos => console.log(todos));
            console.log(todos);
        }
        else if (answers.select == "exit") {
            console.log(chalk.bgGray("***** Good Bye *****"));
            break;
        }
        ;
    } while (true);
}
createTodo(todos);
