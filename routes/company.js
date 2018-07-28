var express = require('express');
var router = express.Router();
// var crypto = require('crypto');
// var nodemailer = require('nodemailer');

// Require controller modules
var admin_controller = require('../controllers/adminController');
var company_controller = require('../controllers/companyController');
var token_controller = require('../controllers/tokenController');

// /// Company ROUTES ///

/* GET villey home page. */
router.get('/', company_controller.company_index);

// Get a list of users 
router.get('/users', company_controller.company_user_list);

// GET request for creating a user
router.get('/user/create', company_controller.company_user_add_get);

// POST Request for creating user
router.post('/user/create', company_controller.company_user_add_post);

// Update a user by his id
router.get('/user/:id/update', company_controller.company_user_update_get);
router.post('/user/:id/update', company_controller.company_user_update_post);

// Delete a user by his id
router.get('/user/:id/delete', company_controller.company_user_delete_get);
router.post('/user/:id/delete', company_controller.company_user_delete_post);

// Export the router for external use
module.exports = router;

