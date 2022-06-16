import { Component } from 'react'
import AddTodo from './components/addTodo';
import TodoList from './components/todoList';
import TodoDelateButtons from './components/todoDelates';
import './styles/app.scss'

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos:[],
            input:""
        }
    };

    addTodo = todo => {
        this.setState({todos:[...this.state.todos,todo]})
    }

    todoUpdate = (todo,e) => {
        const newTodo = this.state.todos.map(eachTodo => {
            if(eachTodo === todo){
                e.target.innerHTML = !todo.complete ? "Undo" : "Done"
                return {
                    text:todo.text,
                    id:todo.id,
                    complete:!todo.complete,
                    checked:todo.checked
                }
            }else{
                return eachTodo
            }
        });
        this.setState({todos:newTodo})
    }

    delateTodo = todo =>{
        const filterByDelate = this.state.todos.filter(eachTodo => eachTodo.id !== todo.id);
        this.setState({todos:filterByDelate})
    }

    delateAll = () => {
        this.setState({todos:[]});
    }

    delateAllConfirmed = () => {
        this.state.todos.map(el => {
            if(el.complete){
                const delateAllConfirmed =  this.state.todos.filter(element => element.complete === false);
                this.setState({todos:delateAllConfirmed})
            }
        })
    }

    labelClicked = (todo,e) => {
        if(!e.target.parentElement.childNodes[0].checked){
            todo.checked = false;
            todo.checked = !todo.checked
        }
    }

    deleteAllChecked = () => {
        const deleteAllChecked = this.state.todos.filter(todo => todo.checked !== true);
        this.setState({todos: deleteAllChecked})
    }

    editTodo = todo => {
        const tempTodos = [...this.state.todos].map(el => {
            if(todo.id === el.id){
                return {
                    id:todo.id,
                    complete:todo.complete,
                    checked:todo.checked,
                    text:this.state.input
                }
            }
            return el
        });
        this.setState({todos:tempTodos});
        this.setState({input:""})
    }

    changeInputValueForEdit = async value => {
        await this.setState({input: value});
        await this.setState({value:""})
    }

    render(){
        return (
            <div className="todo-app">
                <header>
                    <AddTodo changeInputValueForEdit={this.changeInputValueForEdit} todos={this.state.todos} addTodo={this.addTodo} />
                </header>
                <main>
                    <TodoList editTodo={this.editTodo} labelClicked={this.labelClicked} delateTodo={this.delateTodo} todos={this.state.todos} todoUpdate={this.todoUpdate} />
                </main>
                <footer>
                    <TodoDelateButtons deleteAllChecked={this.deleteAllChecked} todos={this.state.todos} delateAllConfirmed={this.delateAllConfirmed} delateAll={this.delateAll} />
                </footer>
            </div>
        )
    }
}

export default TodoApp