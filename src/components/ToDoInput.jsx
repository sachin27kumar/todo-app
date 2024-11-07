import { useState, useEffect } from "react";

function ToDoInput(props) {
    // State to hold the current input text for a new task
    const [inputText, setInputText] = useState("");

    // Effect hook to set inputText when editingText prop changes (for editing an existing task)
    useEffect(() => {
        setInputText(props.editingText || ""); // If editingText exists, set it as inputText; otherwise, set as empty
    }, [props.editingText]);

    // Function to handle the Add/Update Task button click
    function handleClick() {
        if (inputText === "") {
            alert("Task field is empty. Enter a task before clicking 'Add Task'!"); // Alert if input field is empty
        } else {
            props.addNewTask(inputText); // Add new task if inputText is not empty
            setInputText(""); // Clear the input field after adding task
        }
    }

    return (
        <>
            {/* Input field for entering a new task */}
            <input 
                type="text" 
                className="inputBox border-none outline-none text-gray-800 font-medium p-2 rounded-md mx-6 w-1/2 focus:scale-110 focus:mx-10 transition-all ease-in duration-300 shadow-lg" 
                placeholder="Enter your task..." 
                value={inputText} 
                onChange={(e) => setInputText(e.target.value)} // Update inputText state on change
            />
            
            {/* Button to add or update the task based on editingText prop */}
            <button 
                type="submit" 
                className="addButton p-2 px-4 font-semibold text-white bg-gradient-to-r from-[#1dbedf] to-[#5f40a3] rounded-md shadow-lg transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 hover:from-[#5f40a3] hover:to-[#1dbedf] focus:outline-none" 
                onClick={handleClick}
            >
                {props.editingText ? "Update Task" : "Add Task"} {/* Change button text based on editingText */}
            </button>
        </>
    );
}

export default ToDoInput;
