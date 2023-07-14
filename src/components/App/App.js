import './App.css';

import Form from '../Form/Form';
import Ideas from '../Ideas/Ideas';
import { useState, useEffect } from 'react';

import { getIdeas } from '../../api-calls';

const App = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    getIdeas()
    .then(res => setIdeas(res.ideas))
    .catch(err => console.log(err));
  }, [])

  const createIdea = (name, desc) => {
    setIdeas([
      ...ideas,
      {
        id: ideas.length,
        name: name,
        desc: desc
      }
    ]);
  };

  const deleteIdea = (id) => {
    setIdeas(ideas.filter(idea => idea.id !== id))
  };

  if (!ideas.length) {
    return;
  } else {
    return (
      <main className='app'>
        <h1>Full-Stack Ideabox</h1>
        <Form createIdea={createIdea}/>
        <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
      </main>
    );
  }
};

export default App;