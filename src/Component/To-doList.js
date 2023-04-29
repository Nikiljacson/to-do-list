import { useState } from "react"
import './To-doList.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import todoimg1 from '../Assets/todoimg1.jpg';

const AddTask = ({addTask})=>{
    const [txtvalue,updateValue]=useState("");


const handleSubmit=e=>{
    e.preventDefault();
    if(txtvalue !=="")
    {
        addTask(txtvalue)
        updateValue("")
    }
    else{
        alert("enter any value");
    } 
}

return(
    <form onSubmit={handleSubmit} className="col-md-12">
        <input type="text" value={txtvalue} onChange={e=>updateValue(e.target.value)}/>
        <button type="submit" id="addbtn">Add</button>
    </form>
);
};


const TodoList=()=>{                                                            //1
    const addTaskvalue = text =>updateTask([...tasks,{text}]);
    const [tasks,updateTask]=useState([             
        {
            text:"Task 1",
            isCompleted:false
        },
        {
            text:"Task 2",
            isCompleted:false
        },
        {
            text:"Task 3",
            isCompleted:false
        }
    ]);

    const toggletask=index=>{
        const newTask=[...tasks];
        if(newTask[index].isCompleted)
        {
            newTask[index].isCompleted=false;
        }
        else{
            newTask[index].isCompleted=true;
        }
        updateTask(newTask);
    }

    const removeTask=index=>{
        const newTask=[...tasks];
        newTask.splice(index,1);
        updateTask(newTask);
    }

    return(
        <div className="row">
        <img src={todoimg1} className="col-md-12"/>
        <div className="todolist-tasks">
            
            {tasks.map((task,index)=>(
        
            <div className="col-md-12" id="tasks">
                <span onClick={()=>toggletask(index)} className={task.isCompleted? "task-name completed-task":"task-name"}>
                {index+1}{". "}
                {task.text}
                
                </span>
                <button onClick={()=>removeTask(index)} id="removebtn">Remove</button>
            </div>
            )
        )}
        <AddTask addTask={addTaskvalue}/>
        </div>
        </div >
    );
}

export default TodoList;