import { useState } from "react";
import "./toDoList.css";

function ToDoList() {
    const[tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !=="") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updateTasks = tasks.filter((_,i) => i != index);
        setTasks(updateTasks);
    }

    function moveTaskUp(index) {
        const updateTasks =[...tasks];
        if(index>0) {
            [updateTasks[index], updateTasks[index-1]] = [updateTasks[index-1], updateTasks[index]]
            setTasks(updateTasks)
        }
       
    }

    function moveTaskDown(index) {
        const updateTasks =[...tasks];
        if(index<tasks.length-1) {
            [updateTasks[index], updateTasks[index+1]] = [updateTasks[index+1], updateTasks[index]]
            setTasks(updateTasks)
        }
    }

    return(
        <>
            <div className="to-do-list">
                <h1>My ToDo List</h1>
                <div>
                    <input type="text" placeholder="Enter task" value={newTask} onChange={handleInputChange}/>
                    <button className="add-button" onClick={addTask}>Save</button>
                </div>
                <ol>
                    {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="deleteButton" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="moveButton" onClick={() => moveTaskUp(index)}>Up</button>
                        <button className="moveButton" onClick={() => moveTaskDown(index)}>Down</button>
                    </li>  )}
                </ol>
            </div>
        </>
    );

}

export default ToDoList;