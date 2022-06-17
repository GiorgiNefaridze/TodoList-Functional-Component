import '../styles/todoList.scss'

export default function TodoList({todos,deleteTodo,doneTodo,editTodo,checkCheckbox}) {
    return (
        <ul>
            {todos.map(todo => (
                <div key={todo.id} className={todo.complete ? "todo-li li-active" : "todo-li"}>
                    <div className="todoText_Checkbox">
                        <label>
                            <input onClick={()=> checkCheckbox(todo)} type="checkbox" />
                            <li>{todo.text}</li>
                        </label>
                    </div>
                    <div>
                        <button onClick={(e)=> doneTodo(todo.id,e,todo)}>Done</button>
                        <button onClick={()=> editTodo(todo)}>Edit</button>
                        <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </ul>
    )
}