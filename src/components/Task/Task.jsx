import './Task.css';
import {useState} from 'react';


const Task = ({id, isDone, text, onDelete, onChange}) => {

// onClick={function f() {console.log(id)}}> - чтобы вызов функции произошел по клику, а не сразу после рендера
    const [isChecked, setIsChecked] = useState(isDone); // local state of component

    const handleIsDone = () => {
        setIsChecked(!isChecked); // changing local state of component
        onChange(id); // changing state of task object in list
    };

  return (
     <li key={id} className="Task">
        <div className="TaskListWrap">
            <input checked={isChecked} type='checkbox' onChange={handleIsDone} />
            {text}
        </div>
        <button className="CancelButton" onClick={() => { onDelete(id)}}> × </button>
      </li>
  );
}

export default Task;