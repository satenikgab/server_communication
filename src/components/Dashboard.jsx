import { useEffect, useState } from "react"
import { AddTask } from "./AddTask"
import { Stats } from "./Stats"
import { TaskList } from "./TaskList"
import axios from "axios"

export const Dashboard = () => {
const [tasks, setTasks] = useState([

]);

const handleDelete = id => {
    setTasks(tasks.filter(task => task.id != id));

 }

const addTask = (task) => {
    setTasks([...tasks, task]);
}


const handleUpdate = (id, value) => {
   
    setTasks(tasks.map(task => task.id == id?{...task, status:value}:task));
}
useEffect(() => {
    axios
    .get("http://localhost:3004/tasks")
    .then(response => {
        setTasks(response.data);
    });

},[]);


    return <div className="dashboard">
        <div className="row">
            <TaskList tasks = {tasks} onDelete = {handleDelete} onUpdate = {handleUpdate}/>
            <AddTask onAdd = {addTask} />
        </div>
        <Stats tasks = {tasks}/>
    </div>
}