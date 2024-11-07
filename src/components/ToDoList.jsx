import ToDoItem from "./ToDoItem"  // Importing the ToDoItem component to render each task

function ToDoList(props) {
    return (
        <>
            {/* The outer div holds the entire list of tasks and applies flex column layout */}
            <div className="w-full flex flex-col my-6">
                {/* Mapping over the fullList prop to render each task */}
                {props.fullList.map((task, index) => (
                    // Render each ToDoItem with props: task data, delete, edit, and toggle completion functions
                    <ToDoItem 
                        key={index} 
                        task={task} 
                        onDelete={() => props.onDeleteTask(task)}  // Pass the delete task function
                        onEdit={() => props.onEditTask(task)}      // Pass the edit task function
                        onToggleCompletion={() => props.onToggleCompletion(task)}  // Pass the toggle task completion function
                    />
                ))}
            </div>
        </>
    );
}

export default ToDoList;
