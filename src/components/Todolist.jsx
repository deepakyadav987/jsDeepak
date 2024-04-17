import React,{useState} from "react";

function Todolist(){
    const[tasks,setTasks]=useState([]);
    const[newTask,setNewTask]=useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)

    }
    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t=>[...t,newTask])
            setNewTask("");
        }
        

    }
    function deleteTask(index){
        const updatedTasks=tasks.filter((_,i)=>i!==index);
        setTasks(updatedTasks);

    }
    function moveUpTask(index){
        if(index>0){
        const updatedTasks=[...tasks];
        [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]
        setTasks(updatedTasks)
        }
        
    }
    function moveDownTask(index){
        if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]]
            setTasks(updatedTasks)
        }
        

    }

    return(
        <>
        <div className="to-do-list">
            <h1>TO -DO LIST</h1>
            <div>
                <input type="text" value={newTask} placeholder="Enter new task..." onChange={handleInputChange} />
                <button className="add-btn" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task,index)=>
                <li key ={index}>
                    <span className="text">{task}</span>
                    <button className="deleteTask" 
                    onClick={()=>deleteTask(index)}>
                        ❎
                    </button>

                    <button className="moveTask" 
                    onClick={()=>moveUpTask(index)}>
                        👆
                    </button>

                    <button className="moveTask" 
                    onClick={()=>moveDownTask(index)}>
                        👇
                    </button>

                    </li>)}
            </ol>
        </div>
        </>
    )
}
export default Todolist;