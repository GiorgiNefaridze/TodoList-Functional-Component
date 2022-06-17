import { useState } from 'react'
import AddTodo from './components/addTodo'
import TodoList from './components/todoList'
import TodoDeletes from './components/todoDeletes'
import './styles/app.scss'

export default function TodoApp() {

    const [todos,setTodos] = useState([])
    const [inpValue,setinpValue] = useState("")

    const addtodo = (value) => {
        const todo = {text:value,id:Math.floor(Math.random() * 500),complete:false,checked:false};
        setTodos([todo,...todos]);
    }
    
    const deleteTodo = (id) => {
        const filterByDelete = todos.filter(el => id !== el.id);
        setTodos(filterByDelete)
    }

    const doneTodo = (id,e,todo) => {
        const filterByDone = todos.map(el => {
            if(id === el.id){
                return {
                    ...el,
                    complete:!el.complete
                }
            }
            return el
        });
        e.target.innerHTML = !todo.complete ? "Undo" : "Done";
        setTodos(filterByDone)
    }

    const editTodo = (todo) => {
        const editedTodos = todos.map(el => {
            if(todo.id === el.id){
                return {
                    ...el,
                    text:inpValue
                }
            }
            return el
        })
        setTodos(editedTodos)
    }

    const inputValue = text => {
        setinpValue(text)
    }

    const deleteAllTodo = () => {
        setTodos([])
    }

    const deleteAllConfirmed = () => {
        const filterByConfirmed = todos.filter(todo => todo.complete !== true)
        setTodos(filterByConfirmed)
    }

    const deleteAllChecked = () => {
        const filterByChecked = todos.filter(todo => todo.checked !== true);
        setTodos(filterByChecked)
    }

    const checkCheckbox = (todo) => {
        const check = todos.map(el => {
            if(todo.id === el.id){
                return {
                    ...el,
                    checked:!el.checked
                }
            }
            return el
        })
        setTodos(check)
    }

    return (
        <div className='todo-app'>
            <header>
                <AddTodo inputValue={inputValue} todos={todos} addtodo={addtodo} />
            </header>
            <main>
                <TodoList checkCheckbox={checkCheckbox} editTodo={editTodo} doneTodo={doneTodo} deleteTodo={deleteTodo} todos={todos} />
            </main>
            <footer>
                <TodoDeletes deleteAllChecked={deleteAllChecked} deleteAllConfirmed={deleteAllConfirmed} deleteAllTodo={deleteAllTodo} />
            </footer>
        </div>
    )
}