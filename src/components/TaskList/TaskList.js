
import { Component } from "react";
import { PropTypes } from 'prop-types';

import TodoListItem from "../Task/Task";

import './TaskList.css';

class TodoList extends Component {
    
    render() {
        const{data, onDelete, onComplete, taskEdit} = this.props;
        const elements = data.map(item => {
            const {id, ...items} = item;
    return (
        <TodoListItem 
            {...items}
            onDelete={()=>onDelete(id)}
            onComplete={()=>onComplete(id)}
            id={id}
            taskEdit={taskEdit}
        />
        )
    
});

return (
            <ul className="todo-list">
                {elements}

            </ul>
        )
}
       
    }

    TodoList.propTypes = {
        data: PropTypes.array, 
        onDelete: PropTypes.func.isRequired, 
        onComplete: PropTypes.func.isRequired,
        taskEdit: PropTypes.func.isRequired

    }

export default TodoList;