import React, {useState} from "react";
import "./Styles.css";



const Todo = () => {
  const [initial, setInitial] = useState('');
  const [data, setData] = useState([]);

  const getInput = (event) => {
    setInitial(event.target.value);
  }
  const getData = () => {
    console.log(initial);
    let store=[...data,initial];
    setData(store);
    setInitial('');
  }
  const deleteTask = (index) =>{
        console.log(index);
        let filterData = data.filter((curElem, id)=>{
            return id != index                          
        })
        setData(filterData)
    }
    console.log(data);
  
  return(
    <div className='container'>
      <div className="inputTask">
        <input type="text" placeholder="Add New Task" value={initial} onChange={getInput}></input>
        <button onClick={getData}>Add</button>
        </div> 
      <div className="taskList">
  {data.map((curVal, index) => (
    <div key={index} className="taskData">
      <p>{curVal}</p>
      <i id="deleteIcon" onClick={() => deleteTask(index)} className="fas fa-trash"></i>
    </div>
  ))}
</div>
  
    
    </div>
    
)
}

export default Todo 
