function ToDoItem(props) {   
  return (
      <>
          {/* Container div to hold the task item, centered with Tailwind CSS */}
          <div className="list-div flex justify-center align-middle w-1/2 mx-auto"> 
              
              {/* Task item list element with conditional styling for completed tasks */}
              <li className={`${props.task.completed ? 'line-through text-gray-500' : ''} taskDiv overflow-scroll w-3/5 bg-slate-100 border-none outline-none text-gray-800 font-normal text-left list-none p-2 rounded-md mx-6 my-2 shadow-lg`}>
                  {props.task.text} 
              </li>
              
              {/* Buttons and checkbox container */}
              <div className="flex justify-center items-center space-x-4">
                  
                  {/* Edit button to modify the task text */}
                  <button 
                      className="editBtn px-2 py-1 font-semibold text-white bg-lime-600 rounded-md shadow-lg transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 hover:bg-lime-700 focus:outline-none"
                      onClick={props.onEdit}
                  >
                      Edit
                  </button>
                  
                  {/* Delete button to remove the task */}
                  <button 
                      className="deleteBtn px-2 py-1 font-semibold text-white bg-red-500 rounded-md shadow-lg transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 hover:bg-red-700 focus:outline-none" 
                      onClick={props.onDelete}
                  >
                      Delete
                  </button>
                  
                  {/* Checkbox to toggle task completion status */}
                  <input 
                      type="checkbox" 
                      className="w-6 h-6 focus:outline-none focus:ring-2 hover:scale-110 transition-all duration-200 ease-in-out" 
                      onChange={props.onToggleCompletion} 
                      checked={props.task.completed} 
                  />
              </div>
          </div>
      </>
  )
}

export default ToDoItem
