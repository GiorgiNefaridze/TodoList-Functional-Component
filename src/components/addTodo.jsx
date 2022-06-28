import { useState } from 'react'
import '../styles/addTodo.scss'

export default function AddTodo({addtodo,todos,inputValue}) {

    const [value,setValue] = useState("")
    const [inputValidation,setInputValidation] = useState(false)

    const updateValue = (e) => {
        setValue(e.target.value);
        inputValue(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault();
        if(value.length > 0){
            addtodo(value);
        }
        setValue("");
        todos.some(el => el.text === value) ? setInputValidation(!inputValidation) : setInputValidation(inputValidation)
    }

    return (
        <>
            <h1>Todo List</h1>
            <form>
                <input type="text" onChange={updateValue} value={value} placeholder="Add/Edit your todo here..." />
                <button onClick={submitForm} type="submit">Add</button>
            </form>
           {todos.length < 1 &&  <p className='todo-blink'>You have 0 todo in todo list</p>}
           {inputValidation ? <p className="todo-blink">You have same todo in your list</p> : ""}
        </>
    )
}