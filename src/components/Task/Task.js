
import { Component } from 'react';
import { PropTypes } from 'prop-types';

import Timer from '../timer/timer';
import './Task.css';



class TodoListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            id: this.props.id,
            edit: false,            
        }
    }

    onEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
        
    }

    valueChange = (e) => {
        this.setState({
            task: e.target.value,
            
        })
        console.log(this.state.task, this.state.id)
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.taskEdit(this.state.task, this.state.id);
        this.setState({
            task: '',
            id: this.props.id,
            edit: false
        })
        
    }


    render () {
        const {task, onDelete, onComplete, active} = this.props; 
                let classNames = '';
        if (!active) {
        classNames = 'completed';
        }
        
        

        return (
            <div>
                {this.state.edit ? 
                    (<li className="editing">
                        <div className="view">
                            <input className="toggle" type="checkbox" />
                                <label>
                                    <span className="description">Editing task</span>
                                    <span className="created">created 17 seconds ago</span>
                                    
                                </label>
                            <button className="icon icon-edit"></button>
                            <button className="icon icon-destroy"></button>
                        </div>
                        <form onSubmit={this.onSubmit}><input type="text" className="edit" defaultValue={task} onChange={this.valueChange}/></form>  
                    </li>)  : 
                    (<li className={classNames}>
                    <div className="view">
                    <input  onClick={onComplete} type="checkbox" className="toggle" />
                    <label>
                        <span className="description">{task}</span>
                        {<Timer />}                        
                    </label>
                    <button 
                        className="icon icon-edit"
                        onClick={this.onEdit}                    
                    ></button>
                    <button className="icon icon-destroy" onClick={onDelete}></button>
                </div></li>)}
                
            </div>
        )
    }
}

TodoListItem.propTypes = {
    task: PropTypes.string, 
    onDelete: PropTypes.func.isRequired, 
    onComplete: PropTypes.func.isRequired, 
    active: PropTypes.bool
}
TodoListItem.defaultProps = {
    active: false
}

export default TodoListItem;