import { Component } from 'react'

class TodoDelateButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        return (
            <>
                <button className={this.props.todos.length < 1 ? "btn-disable" : ""} onClick={()=> this.props.delateAll()}>Delete All</button>
                <button className={this.props.todos.length < 1 ? "btn-disable" : ""} onClick={()=> this.props.deleteAllChecked()}>Delete All Checked</button>
                <button className={this.props.todos.length < 1 ? "btn-disable" : ""} onClick={()=> this.props.delateAllConfirmed(this.props.todos)}>Delete all Confirmed</button>
            </>
        )
    }
}

export default TodoDelateButtons