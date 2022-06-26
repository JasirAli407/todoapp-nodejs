const express = require('express');
const router = express.Router();

// import action controller
const actionsController = require('../controllers/actions_controller');

router.post('/create-task',actionsController.createTask);

router.post('/delete-task',actionsController.deleteTask)

module.exports = router;