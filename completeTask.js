
const readline = require('readline');
const { readFile, writeFile } = require("fs");
const tasksFile = require("./tasks.json");

const completeTask = () => 
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
          
        const newStatus = async () => 
        {
            const taskTitle = await ask("Enter the task title to search: ");

            // Display original data
            const selectedTask = tasksFile.tasks.find(item => item.title === taskTitle);
            console.log('Current status: \n', selectedTask);

            let taskStatus = await ask("Enter the updated status: ");

            // Change status
            const newStatus = data.replace(selectedTask.status, taskStatus);

            rl.close();
       
            // Write new data to existing file
            writeFile("tasks.json", newStatus, "utf8", (err) => 
            {
                if (err) throw err;
                console.log("Status has been updated.");
        
                // Read the updated file
                readFile("tasks.json", "utf-8", (err, updatedData) => 
                {
                    if (err) throw err;
                    console.log('Updated data: \n', JSON.parse(updatedData));
                });   
            });
        };

        newStatus();
        
    });
}

module.exports = completeTask;
