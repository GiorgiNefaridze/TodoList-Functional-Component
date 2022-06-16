import { Component } from 'react'
import '../styles/addTodo.scss'

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {},
            value:""
        }
    };

    inputValue = async e => {
        await this.setState({value:e.target.value})
        if(e.target.value === this.state.todo.text){
            this.setState({inputValidation: true})
        }else{
            this.setState({inputValidation:false})
        }
        await this.props.changeInputValueForEdit(this.state.value);
    }
    
    submitForm = async e => {
        e.preventDefault();
        if(this.state.value.length > 0){
            await this.setState({todo:{text:this.state.value,id:Math.floor(Math.random() * 500),complete:false}});
            await this.props.addTodo(this.state.todo);
        }
        await this.setState({value: ""});
    }

    render(){
        return(
            <>
                <h1>Todo List</h1>
                <form>
                    <input type="text" onChange={this.inputValue} value={this.state.value} placeholder="Add/Edit your todo here..." />
                    <button type="submit" onClick={this.submitForm}>Add</button>
                </form>
                {this.props.todos.length < 1 && <div className='todo-blink'>You have 0 todo in todo list</div>}
                {this.state.inputValidation ? <p className="todo-blink">You have same todo in your list</p> : ""}
            </>
        )
    }
}

export default AddTodo