import './App.css'
import ToDoList from './components/ToDoList'
import Header from './components/Header'
import ToDoInput from './components/ToDoInput'
import { useState } from 'react'

function App() {
  // State to hold the list of tasks
  const [taskList, setTaskList] = useState([]);
  // State to hold the text for the task currently being edited
  const [editingText, setEditingText] = useState("");
  
  // Function to add a new task to the list
  function newTaskList(inputText) {
    setTaskList([...taskList, { text: inputText, completed: false }]);
    setEditingText(""); // Clear editing text after adding task
  }
  
  // Function to delete a specified task from the list
  function deleteTask(taskToDelete) {
    setTaskList(taskList.filter((task) => task.text !== taskToDelete.text));
  }
  
  // Function to edit a task - deletes it and sets text in input for editing
  function editTask(taskToEdit) {
    deleteTask(taskToEdit);
    setEditingText(taskToEdit.text); // Set text to edit in the input field
  }
  
  // Function to toggle the completion status of a task
  function toggleTaskCompletion(taskToToggle) {
    setTaskList(
      taskList.map((task) =>
        task.text === taskToToggle.text
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }
 
  return (
    <>
      <div>
        <Header />
        <ToDoInput addNewTask={newTaskList} editingText={editingText} />
        <ToDoList 
          fullList={taskList} 
          onDeleteTask={deleteTask} 
          onEditTask={editTask} 
          onToggleCompletion={toggleTaskCompletion} 
        />
      </div>
    </>
  )
}

export default App
