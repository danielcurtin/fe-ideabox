function getIdeas() {
  return fetch('http://localhost:3001/api/v1/ideas')
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Something went wrong');
    };
  });
};

function addIdea() {

};

function deleteIdea() {

};

export { getIdeas, addIdea, deleteIdea };