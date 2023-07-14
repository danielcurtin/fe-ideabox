import './App.css';

import Form from '../Form/Form';
import Ideas from '../Ideas/Ideas';
import { useState } from 'react';

const App = () => {
  const [ideas, setIdeas] = useState([{ id: 0, name: "Hello World", desc: "A simple idea" }, { id: 1, name: "Hello World 2", desc: "Another simple idea" }]);

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

  return (
    <main className='app'>
      <h1>Full-Stack Ideabox</h1>
      <Form createIdea={createIdea}/>
      <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
    </main>
  );
};

export default App;