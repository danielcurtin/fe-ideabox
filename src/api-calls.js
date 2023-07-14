function getIdeas() {
  return fetch('http://localhost:3001/api/v1/ideas')
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Something went wrong getting');
    };
  });
};

function addIdea(newIdea) {
  return fetch('http://localhost:3001/api/v1/ideas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newIdea)
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Something went wrong posting');
    };
  });
};

function deleteIdea(ideaId) {
  return fetch(`http://localhost:3001/api/v1/ideas/${ideaId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Something went wrong deleting');
    };
  });
};

export { getIdeas, addIdea, deleteIdea };