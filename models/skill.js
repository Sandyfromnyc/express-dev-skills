const skills = [
    {id: 125223, skill: 'front-end developer', done: true},
    {id: 127904, skill: 'JavaScript', done: false},
    {id: 139608, skill: 'Python', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
	
  function getAll() {
    return skills;
  }