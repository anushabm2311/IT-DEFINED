import React,{ useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Appp = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");


    const addTask = () => {
        if (newTask.trim()!==""){
            setTasks([...tasks,newTask]);
            setNewTask("");
        }
    };

    const removeTask = (index) => {
        const updatedTask = [...tasks];
        updatedTask.splice(index,1);
        setTasks(updatedTask);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2 className="mb-4">To-Do List</h2>

                    <div className="mb-3">
                        <input type="text" 
                        className="form-control" 
                        placeholder="Enter a task" 
                        value={newTask} 
                        onChange={(el)=>setNewTask(el.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary" onClick={addTask}>Add Task</button>
                    <ul className="list-group mt-4 row">
                        {tasks.map((task,index)=> (
                            <li key = {index} className="list-group-items d-flex justify-content-between align-items-center">{task}
                            <button className="btn btn-danger" onClick={()=>removeTask(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Appp;