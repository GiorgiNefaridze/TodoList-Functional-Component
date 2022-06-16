import { Component } from 'react'
import '../styles/todoList.scss'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render(){
        return(
            <ul>
                {this.props.todos.map(todo => (
                    todo.text !== " " &&
                    <div key={todo.id} className={todo.complete ? "todo-li li-active " : "todo-li"}>
                        <div className="todoText_Checkbox">
                            <label>
                                <input type="checkbox" />
                                <li onClick={(e)=> this.props.labelClicked(todo,e)}>{todo.text}</li>
                            </label>
                        </div>
                        <div>
                            <button onClick={(e)=> this.props.todoUpdate(todo,e)}>Done</button>
                            <button onClick={()=> this.props.editTodo(todo)}>Edit</button>
                            <button onClick={()=> this.props.delateTodo(todo)}>Delate</button>
                        </div>
                    </div>
                ))}
            </ul>
        )
    }
}

export default TodoList