
Due Date: 9/21/24, 12:59 AM (EDT)
Points: 30 

Objective:
Develop a simple Node.js application that manages a list of tasks. The application should read tasks from a file, add new tasks, mark tasks as completed, and list all tasks.

Setup:
•	Initialize a new Node.js project using npm init.
•	Create a tasks.json file that contains some sample tasks. Each task should have a title, description, and status (completed or not).
•	Make sure to use the fs module in Node.js for file handling.

1. Reading Tasks:
•	Create a function called getAllTasks that reads the tasks.json file asynchronously. The function should return an array of tasks. If any issues are reading the file, ensure error handling is in place to notify the user.

2. Listing All Tasks:
•	Create a function called listTasks that retrieves all tasks using getAllTasks. The tasks should be displayed clearly and formatted, showing their title and status (completed or not completed).

3. Adding a New Task:
•	Create an addTask function that takes a task's title and description as parameters. This function should add a new task to the tasks.json file with a default status of "not completed." Ensure that the file is updated asynchronously after the task is added.

4. Marking a Task as Completed:
•	Create a function called completeTask that takes a task's title as a parameter. This function should search for the task by its title and update its status to "completed." The change should be saved to the tasks.json file asynchronously.

5. User Interaction:
•	Use Node.js’s readline module to create a command-line interface allowing users to interact with the application. 

The user should be able to:
1.	List all tasks.
2.	Add a new task.
3.	Mark a task as completed.

•	Ensure that the interface presents clear options and prompts to the user. For example, it could prompt the user to enter a number for each action (e.g., "Enter 1 to list tasks, 2 to add a task, or 3 to mark a task as completed").

6. Error Handling:
•	Make sure to handle errors in all your functions, especially when interacting with files. For example, handle cases where the file cannot be read or written to, and provide meaningful error messages for the user.

Requirements:
•	You must use asynchronous file handling functions (like readFile and writeFile) to manage tasks in the tasks.json file.
•	The task list should always be saved to the file after a new task is added or a task is marked as completed.
•	The application must handle errors gracefully, displaying user-friendly messages when something goes wrong.

Deliverables:
•	A functioning Node.js application that meets the above specifications.
•	A tasks.json file with sample tasks to demonstrate the application's functionality.

Submission
•	Create a new repository on GitHub named "your-last-name_INF656".
•	Create an Assignments folder in your workstation and add the assignment code to that folder. 
•	Commit all changes in your local repository using Git commands (git add . and git commit -m "Initial commit").
•	Push your local repository to your new GitHub repository by running git push origin main.
•	Copy the URL of your GitHub repository.
•	Click the title Assignment 2 above to access the submission area.
•	Click the "Write Submission" button and paste the URL to your GitHub repository in the provided text box.
•	Do NOT use the "Add Comments" area to submit your assignment; it is only for comments or questions.
•	Double-check the URL and ensure it links directly to your GitHub repository and is public, then submit your assignment.

