const skills = [
    {id: 125223, skill: 'front-end developer', mastered: true},
    {id: 127904, skill: 'JavaScript', mastered: false},
    {id: 139608, skill: 'Python', mastered: false}
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteSkill,
    update
  };

  function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
  }

  function deleteSkill(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skill.mastered = false;
    skills.push(skill);
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
	
  function getAll() {
    return skills;
  }