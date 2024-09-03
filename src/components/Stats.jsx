export const Stats = ({tasks}) => {


    const completedTasks = tasks.filter(task => task.status == "completed");
    const inProgressTasks = tasks.filter(task => task.status == "in progress");
    const unstartedTasks = tasks.filter(task => task.status == "unstarted");
    return <div>
        <p>stats</p>
        <p>completed {completedTasks.length}/{tasks.length}</p>
        <p>in progress {inProgressTasks.length}/{tasks.length}</p>
        <p>unstarted {unstartedTasks.length}/{tasks.length}</p>
        
    </div>
}