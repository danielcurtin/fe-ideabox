import './App.css';

import Form from '../Form/Form';
import Ideas from '../Ideas/Ideas';
import { useState } from 'react';

const App = () => {
  const [ideas, setIdeas] = useState([{ id: 0, title: "Hello World", desc: "A simple idea" }, { id: 1, title: "Hello World 2", desc: "Another simple idea" }]);

  return (
    <main className='app'>
      <h1>Full-Stack Ideabox</h1>
      <Form />
      <Ideas ideas={ideas}/>
    </main>
  );
};

export default App;