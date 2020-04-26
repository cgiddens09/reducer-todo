import React, {useState, useReducer} from 'react';
import {reducerState, initialState} from './reducers/reducer';
import List from './components/list';
import './App.css';

function App() {
  const [item, dispatch] = useReducer(reducerState, initialState);
  const [newTask, setTask] = useState('');

  const handleChanges = e => {
    setTask(e.target.value)
  }
  const handleSubmit = e =>{
    e.preventDefault();
    setTask('')
  }

  return (
    <div className="App">
     <h1>My Todo List</h1>
     <form onSubmit={handleSubmit}>
       <input type="text" name="item" value={newTask} onChange={handleChanges} placeholder="Task"/>
       <br />
       <button onClick={() => dispatch({type: 'ADD_TASK', payload: newTask})} type='submit'>Add Task</button>
       <List item={item} dispatch={dispatch}/>
       <button onClick={()=> dispatch({type: 'CLEAR', payload:newTask})}>Clear All</button>
     </form>
    </div>
  );
}

export default App;

