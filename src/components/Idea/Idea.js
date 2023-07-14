import './Idea.css';

const Idea = ({ id, name, desc, deleteIdea }) => {
  return (
    <div className='idea'>
      <h2>{name}</h2>
      <p>{desc}</p>
      <button className='delete' onClick={() => deleteIdea(id)}>❌</button>
    </div>
  );
};

export default Idea;