import './Idea.css';

const Idea = ({ id, title, desc }) => {
  return (
    <div className='idea'>
      <h2>{title}</h2>
      <p>{desc}</p>
      <button className='delete'>❌</button>
    </div>
  );
};

export default Idea;