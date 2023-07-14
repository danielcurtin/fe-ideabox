import './Idea.css';

const Idea = ({ id, name, desc, removeIdea }) => {
  return (
    <div className='idea'>
      <h2>{name}</h2>
      <p>{desc}</p>
      <button className='delete' onClick={() => removeIdea(id)}>❌</button>
    </div>
  );
};

export default Idea;