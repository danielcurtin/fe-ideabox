import './App.css';

import Form from '../Form/Form';
import Ideas from '../Ideas/Ideas';
import { useState, useEffect } from 'react';

import { getIdeas, addIdea, deleteIdea } from '../../api-calls';

const App = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    getIdeas()
    .then(res => setIdeas(res.ideas))
    .catch(err => console.log(err));
  }, [])

  const createIdea = (name, desc) => {
    const newIdea = { name: name, desc: desc };
    addIdea(newIdea)
    .then(res => setIdeas([...ideas, res]))
    .catch(err => console.log(err));
  };

  const removeIdea = id => {
    deleteIdea(id)
    .then(() => setIdeas(ideas.filter(idea => idea.id !== id)))
    .catch(err => console.log(err));
  };

  if (!ideas.length) {
    return;
  } else {
    return (
      <main className='app'>
        <h1>Full-Stack Ideabox</h1>
        <Form createIdea={createIdea}/>
        <Ideas ideas={ideas} removeIdea={removeIdea}/>
      </main>
    );
  }
};

export default App;