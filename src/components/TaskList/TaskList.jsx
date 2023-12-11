import './TaskList.css';
import Task from '../Task/Task';

function TaskList(props) {
  return (
    <ul className="TaskList">
        {props.tasks.map((task) => {
            return <Task id={task.id} isDone={task.isDone} text={task.text} onDelete={props.onDeleteTask} onChange={props.onChangeTaskStatus}/>
        })
    }
    </ul>
  );
}

export default TaskList;