import { Component } from 'react'
import TodoDelateButtons from './todoDelates';
import '../styles/addTodo.scss'

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: "",
            value:""
        }
    };

    inputValue = e => {
        this.setState({value:e.target.value})
    }

    submitForm = async e => {
        e.preventDefault();
        if(this.state.value.length > 0){
            await this.setState({todo:{text:this.state.value,id:Math.floor(Math.random() * 500),complete:false}});
            await this.props.addTodo(this.state.todo);
        }
        await this.setState({value: ""})
    }


    render(){
        return(
            <>
                <h1>Todo List</h1>
                <form>
                    <input type="text" onChange={this.inputValue} value={this.state.value} placeholder="Add your todo here..." />
                    <button type="submit" onClick={this.submitForm}>Add</button>
                </form>
                {this.props.todos.length < 1 && <div className='todo-blink '>You have 0 todo in todo list</div>}
            </>
        )
    }
}

export default AddTodo