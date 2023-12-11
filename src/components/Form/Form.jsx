import {useState} from 'react';
import './Form.css';

function Form(props) {

  const {onAddTask} = props;
  const [text, setText] = useState(""); // local state of component
  const onChangeText = (event) => {
    setText(event.target.value);
  }
  const onAdd = (event) => {
    event.preventDefault();
    onAddTask(text);
    setText("");
  };

  return (
    <div className="Form">
        <input type='text' className="FormInput" value={text} onChange={onChangeText}/>
        <button className="FormButton" onClick={onAdd}> ADD </button>
    </div>
  );
}

export default Form;