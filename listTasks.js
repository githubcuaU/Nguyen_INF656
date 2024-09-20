
const { readFile } = require("fs");
const tasksFile = require("./tasks.json");

const listTasks = () => 
{
    const getAllTasks = () => 
    {
        // Read file
        readFile("tasks.json", "utf-8", (err, data) => 
        {
                if (err) throw err;
                
                // Convert JSON data into JavaScript object
                const parseData = JSON.parse(data);
            
                // Display original data
                console.log(parseData);
        });
    }

    getAllTasks();
}


module.exports = listTasks;
