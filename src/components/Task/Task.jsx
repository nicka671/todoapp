import './Task.css';
import {useState} from 'react';


function Task(props) {

// onClick={function f() {console.log(id)}}> - чтобы вызов функции произошел по клику, а не сразу после рендера
    const {id, isDone, text, onDelete, onChange} = props
    const [isChecked, setIsChecked] = useState(isDone); // local state of component

    const changeIsDone = () => {
        setIsChecked(!isChecked); // changing local state of component
        onChange(id); // changing state of task object in list
    };

  return (
     <li key={id} className="Task">
        <div className="TaskListWrap">
            <input checked={isChecked} type='checkbox' onChange={changeIsDone} />
            {text}
        </div>
        <button className="CancelButton" onClick={function f() { onDelete(id) }}> × </button>
      </li>
  );
}

export default Task;