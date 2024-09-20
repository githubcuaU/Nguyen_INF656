

const readline = require("readline");
const listTasks = require("./listTasks");
const addTask = require("./addTask");
const completeTask = require("./completeTask");

let rl = readline.createInterface
(
    process.stdin, 
    process.stdout
);

const userInput = () => 
{
    rl.question('What do you want to do ? \n Enter 0 to exit \n Enter 1 to list tasks \n Enter 2 to add a task \n Enter 3 to mark a task as completed \n', (action) => 
    {      
        if (action === "0")
        {
            rl.close();
        }
        if (action === "1")
        {
            listTasks();
        }
        if (action === "2")
        {
            addTask();
        }
        if (action === "3")
        {
            completeTask();
        }
    });
}

userInput();
