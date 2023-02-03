 // Convention is to name the model in uppercase and singular
 const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
  };

  function update(req, res) {
    req.body.mastered = !!req.body.mastered;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
  }

  function edit(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', {
      title: 'Edit Skill',
      skill
    });
  }

  function deleteSkill(req, res) {
    Skill.deleteSkill(req.params.id);
    res.redirect('/skills');
  }

  function create(req, res) {
   
    // Models are responible for CRUD'ing the data
    Skill.create(req.body);
    // Always do a redirect when data has been changed
    res.redirect('/skills');
  }

  function newSkill(req, res) {
    res.render('skills/new', {title: 'New Skill'});

  }

  function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
  }

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }