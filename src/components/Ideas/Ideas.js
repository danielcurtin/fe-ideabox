import './Ideas.css';
import Idea from '../Idea/Idea';

const Ideas = ({ ideas, removeIdea }) => {
  const allIdeas = ideas.map(idea => <Idea key={idea.id} id={idea.id} name={idea.name} desc={idea.desc} removeIdea={removeIdea}/>)
  
  return (
    <section className='ideas'>
      {allIdeas}
    </section>
  );
};

export default Ideas;