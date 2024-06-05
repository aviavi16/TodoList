import React, { useState} from 'react'

function ToDoList(){

    const [tasks, setTasks] = useState([
        "https://www.geeksforgeeks.org/python-quizzes/",
        "https://en.wikipedia.org/wiki/Timsort",
        "https://leetcode.com/explore/interview/card/top-interview-questions-easy/",
        "Familiarity with formal testing tools like swagger, postman, mock tools etc.",
        "Experience in building and maintaining CI/CD pipelines",
        "Add emoji to app",
        "use flex in css"
     ]);
    const [newtask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newtask.trim() !== ""){
            setTasks(t => [...t, newtask]);
            setNewTask("");
        }


    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i ) => i !== index);
        setTasks(updatedTasks);

    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index -1]] = 
            [updatedTasks[index -1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index +1]] = 
            [updatedTasks[index +1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }
    return (
    <div className='to-do-list'>
        <h1>To-Do-List</h1>

        <div className='input-div'>
            <input
                type="text"
                placeholder='Enter a task...'
                value={newtask}
                onChange={handleInputChange}
                />
            <button
                className='add-button'
                onClick={addTask}>
                    Add
                </button>

        </div>

        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button 
                        className='delete-button'
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button 
                        className='move-button'
                        onClick={() => moveTaskUp(index)}>
                        Up
                    </button>
                    <button 
                        className='move-button'
                        onClick={() => moveTaskDown(index)}>
                        Down
                    </button>

                </li>
            )}

        </ol>



    </div>
    );
}

export default ToDoList