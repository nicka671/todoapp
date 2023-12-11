import './Container.css';
import Form from '../Form/Form';
import TaskList from '../TaskList/TaskList';
import {useState, useCallback, useEffect} from 'react';

const taskArray = [{text: "первая", isDone: true, id: 12332}, {text: "gfhgjk", isDone: false, id: 34567}, {text: "fdgvgf", isDone: true, id: 9876}];

function Container() {

    const [list, setList] = useState(taskArray);

    const deleteTask = useCallback ((id) => {
        const newList = list.filter(function (task) { // list.filter(function (n) - принимает элемент массива и сует в функцию
          return id !== task.id
        });
        setList(newList);
    }, [list]); // функция стала кешироваться вместе с содержимым, надо обновлять, когда обновляется лист

    const changeTaskStatus = useCallback ((id) => {
        list.forEach((task) => { // в скобках элемент массива
            if (task.id === id) {
                const current = !task.isDone;
                task.isDone = current;
            }
        });
    }, [list]);

    const addTask = useCallback ((taskName) => {
        const task = {text: taskName, isDone: false, id: Date.now()};
        const newList = [...list, task];
        setList(newList);
    }, [list]); // функция стала кешироваться вместе с содержимым, надо обновлять, когда обновляется лист

  return (
    <div className="Container">
        <Form onAddTask={addTask}/>
        <TaskList tasks={list} test={123} onDeleteTask={deleteTask} onChangeTaskStatus={changeTaskStatus}/>
    </div>
  );
}

export default Container;