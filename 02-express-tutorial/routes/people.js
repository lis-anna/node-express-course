const express = require('express');
const router = express.Router();
const {
  getPeople,
  updatePerson,
  createPerson,
  createPersonPostman,
  deletePerson,
} = require('../controllers/people');

//get list of people
//router.get('/', getPeople);
//post new person
//router.post('/', createPerson);
//change persons name
//router.put('/:id', updatePerson);
//add new person to the list
//router.post('/postman', createPersonPostman);
//delete person from the list
//router.delete('/:id', deletePerson);

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;
