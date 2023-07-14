import './Ideas.css';
import Idea from '../Idea/Idea';

const Ideas = ({ ideas }) => {
  const allIdeas = ideas.map(idea => <Idea key={idea.id} title={idea.title} desc={idea.desc}/>)
  
  return (
    <section className='ideas'>
      {allIdeas}
    </section>
  );
};

export default Ideas;