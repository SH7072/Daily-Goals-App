import React, { useState } from 'react'
import Task from '../Task/Task'



const Home = () => {

    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(title, description);
        setTasks([...tasks, { title, description }])
        setTitle('')
        setDescription('')
    }
    const deleteTask=(index)=>{
    const newArr=tasks.filter((value,i)=>{
        return i!=index;
    });
    setTasks(newArr);
    }
    return (
        <div className='container'>
            <h2> ADD NEW GOAL</h2>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Task Name'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea placeholder='Task Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button type='submit'>ADD TASK</button>
            </form>

            {tasks.map(( item,index) => (

                <Task key={index} 
                    title={item.title}
                    description={item.description} 
                    deleteTask={deleteTask}
                    index={index}
                />
            ))}
        </div>
    )
}

export default Home