

const readline = require("readline");
const { readFile, writeFile } = require("fs");
const tasksFile = require("./tasks.json");

const addTask = () => 
{
    // Read file
    readFile("tasks.json", "utf-8", (err, data) => 
    {
        if (err) throw err;

        let rl = readline.createInterface
        (
            process.stdin, 
            process.stdout
        );

        const ask = message => new Promise
        ( resolve => rl.question(message , answer => resolve(answer)) );
          
        const newTask = async () => 
        {
            const taskTitle = await ask("Enter a task title: ");
            const taskDescription = await ask("Enter a task description: ");
            let taskStatus = await ask("Enter a task status: ");

            // Default status is "not completed"
            if (taskStatus === "")
            {
                taskStatus = "not completed";
            }
            
            // Convert JSON data into JavaScript object
            const parseData = JSON.parse(data);

            // Add new task to the object
            parseData.tasks.push
            ({
                title: taskTitle,
                description: taskDescription,
                status: taskStatus
            });

            rl.close();

            // Convert the object back to JSON string
            const addedData = JSON.stringify(parseData);

            // Write new data to existing file
            writeFile("tasks.json", addedData, "utf8", (err) => 
            {
                if (err) throw err;
                console.log("Task has been added.");

                // Read the updated file
                readFile("tasks.json", "utf-8", (err, newData) => 
                {
                    if (err) throw err;
                    console.log('Added data: \n', JSON.parse(newData));
                });   
            });
        };

        newTask();
    });

}

module.exports = addTask;


