var express = require('express');
var router = express.Router();
// var crypto = require('crypto');
// var nodemailer = require('nodemailer');

// Require controller modules
var admin_controller = require('../controllers/adminController');
var company_controller = require('../controllers/companyController');
var token_controller = require('../controllers/tokenController');

// /// USER ROUTES ///

/* GET villey home page. */
router.get('/', admin_controller.index);

// GET request for a list of all user
router.get('/users', admin_controller.user_list);

// Add company
router.get('/company/create', admin_controller.company_create_get);
router.post('/company/create', admin_controller.company_create_post);

// An Admin can create another admin
router.get('/admin/create', admin_controller.admin_create_get);
router.post('/admin/create', admin_controller.admin_create_post);

// GET request for creating a user
router.get('/users', admin_controller.user_list);

// POST Request for creating user
router.post('/user/create', admin_controller.user_create_post);

// GET request to delete User.
router.get('/user/:id/delete', admin_controller.user_delete_get);

// GET request to delete User.
router.post('/user/:id/delete', admin_controller.user_delete_post);

// GET request to update User.
router.get('/user/:id/update', admin_controller.user_update_get);

// POST request to update User.
router.post('/user/:id/update', admin_controller.user_update_post);

// GET request for one User.
router.get('/user/:id', admin_controller.user_detail);

// Handle user's login
router.get('/auth/login', admin_controller.login_get);

router.post('/auth/login', admin_controller.login_post)

// Export the router for external use
module.exports = router;

