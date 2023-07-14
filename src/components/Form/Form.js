import './Form.css';
import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const submitIdea = e => {
    e.preventDefault()
  };

  return (
    <form className='form'>
      <div className='form-item'>
        <label htmlFor='name-field'>Idea Name</label>
        <input id='name-field' type='text' value={name} onChange={e => setName(e.target.value)}></input>
      </div>
      <div className='form-item'>
        <label htmlFor='desc-field'>Idea Description</label>
        <input id='desc-field' type='text' value={desc} onChange={e => setDesc(e.target.value)}></input>
      </div>
      <button className='submit' onClick={e => submitIdea(e)}>Submit</button>
    </form>
  );
};

export default Form;