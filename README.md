# React + Vite
Live Link - https://sachin27kumar.github.io/todo-app/
Project Link - https://github.com/sachin27kumar/todo-app.git
To-Do List App
A simple and interactive To-Do List app built using React and Vite. The app allows users to add, edit, delete tasks, and mark them as completed. It is designed to help you stay organized and productive!

Features
Add New Task: Users can add tasks to their to-do list.
Edit Task: Users can edit an existing task.
Delete Task: Users can delete tasks from the list.
Mark as Done: Users can mark tasks as completed by checking a checkbox.
Task List Persistence: Tasks will persist in the current session while the app is open.


Technologies Used

React: A JavaScript library for building user interfaces.
Vite: A fast build tool for modern web applications.
Tailwind CSS: A utility-first CSS framework for styling.

Installation

Prerequisites
  Make sure you have Node.js and npm (Node Package Manager) installed on your computer.
  
You can check if you have them installed by running:
node -v
npm -v
If they are not installed, you can download and install them from Node.js official website.

Steps to Install and Run the App
1.Clone the repository: Open a terminal (or Git Bash) and run the following command to clone the repository:
git clone https://github.com/sachin27kumar/todo-app.git

2.Navigate to the project directory:
cd todo-app

3.Install dependencies: Run the following command to install the required dependencies:
npm install

4.Run the development server: After installing the dependencies, you can start the development server using:
npm run dev

5.Open the app: After running the development server, open your browser and navigate to
 http://localhost:3000 to view the app.


How the App Works
1. Adding a Task
To add a task, type it into the input field and click the Add Task button.
If editing an existing task, the input will display the current text, and clicking Update Task will save the edited task.
2. Editing a Task
To edit an existing task, click the Edit button next to the task. This will populate the input field with the task's current text, allowing you to modify it.
Once edited, click the Update Task button to save the changes.
3. Deleting a Task
To delete a task, click the Delete button next to the task. This will remove the task from the list.
4. Marking a Task as Done
To mark a task as completed, click the checkbox next to the task. The task text will get a line-through effect and turn gray.

File Structure

src/
├── components/
│   ├── Header.jsx
│   ├── ToDoInput.jsx
│   ├── ToDoItem.jsx
│   └── ToDoList.jsx
├── App.css
├── App.jsx
├── index.css
└── index.js

Customizing Styles
The app uses Tailwind CSS for styling. You can customize the appearance by modifying the Tailwind utility classes in the components. Additionally, the background and layout can be modified in App.css.

License
This project is open-source and available under the MIT License.
