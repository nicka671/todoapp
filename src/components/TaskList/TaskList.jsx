import './TaskList.css';
import Task from '../Task/Task';

const TaskList = ({tasks, onDeleteTask, onChangeTaskStatus}) => {
  return (
    <ul className="TaskList">
        {tasks.map((task) => {
            return <Task key={task.id} id={task.id} isDone={task.isDone} text={task.text} onDelete={onDeleteTask} onChange={onChangeTaskStatus}/>
        })
    }
    </ul>
  );
}

export default TaskList;