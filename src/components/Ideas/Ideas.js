import './Ideas.css';
import Idea from '../Idea/Idea';

const Ideas = ({ ideas, deleteIdea }) => {
  const allIdeas = ideas.map(idea => <Idea key={idea.id} id={idea.id} name={idea.name} desc={idea.desc} deleteIdea={deleteIdea}/>)
  
  return (
    <section className='ideas'>
      {allIdeas}
    </section>
  );
};

export default Ideas;