import React, {useState} from 'react';

function NewTodoForm() {

    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');

    const taskEvent = (event) => {
        console.log('task: ', event.target.value);
        setTask(event.target.value); // set's the state and then this value={task}> print's the state back to the value
    }

    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Task</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        required
                        onChange={taskEvent}
                        value={task}>
                    </input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Task Description</label>
                    <textarea 
                        className='form-control' 
                        rows={3} 
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}>
                    </textarea>
                </div>
                <button className='btn btn-primary mt-3'>Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm