const express = require('express');
const router = express.Router();
const { getAllContacts, createContacts, getSingleContacts, updateContacts, deleteContacts } = require('../controllers/contactControllers');

router.route('/').get(getAllContacts).post(createContacts);
router.route('/:id').get(getSingleContacts).put(updateContacts).delete(deleteContacts);

module.exports = router;