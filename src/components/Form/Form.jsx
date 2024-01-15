import {useState} from 'react';
import './Form.css';

const Form = ({onAddTask}) => {
  const [text, setText] = useState(""); // local state of component
  const handleChangeText = (event) => {
    setText(event.target.value);
  }
  const handleAdd = (event) => {
    event.preventDefault();
    onAddTask(text);
    setText("");
  };

  return (
    <div className="Form">
        <input type='text' className="FormInput" value={text} onChange={handleChangeText}/>
        <button className="FormButton" onClick={handleAdd}> ADD </button>
    </div>
  );
}

export default Form;