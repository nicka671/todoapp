import './Container.css';
import Form from '../Form/Form';
import TaskList from '../TaskList/TaskList';
import {useState, useCallback, useEffect} from 'react';

const taskArray = [{text: "первая", isDone: true, id: 12332}, {text: "gfhgjk", isDone: false, id: 34567}, {text: "fdgvgf", isDone: true, id: 9876}];

const Container = () => {

    const [list, setList] = useState(taskArray);

    const handleDeleteTask = useCallback ((id) => {
        const newList = list.filter((task) => { // list.filter(function (n) - принимает элемент массива и сует в функцию
          return id !== task.id
        });
        setList(newList);
    }, [list]); // функция стала кешироваться вместе с содержимым, надо обновлять, когда обновляется лист

    const handleChangeTaskStatus = useCallback ((id) => {
        const changedTask = list.map((task) => { // в скобках элемент массива
            if (task.id === id) {
                const current = !task.isDone;
                task.isDone = current;
            }
            return task;
        });
        setList(changedTask);
    }, [list]);

    const handleAddTask = useCallback ((taskName) => {
        const task = {text: taskName, isDone: false, id: Date.now()};
        const newList = [...list, task];
        setList(newList);
    }, [list]); // функция стала кешироваться вместе с содержимым, надо обновлять, когда обновляется лист

  return (
    <div className="Container">
        <Form onAddTask={handleAddTask}/>
        <TaskList tasks={list} onDeleteTask={handleDeleteTask} onChangeTaskStatus={handleChangeTaskStatus}/>
    </div>
  );
}

export default Container;