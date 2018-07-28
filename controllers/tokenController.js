var User = require('../models/user');
var Token = require('../models/token');
var Company = require('../models/company');
var Admin = require('../models/admin');

// Display list of all users- For the token admins
exports.token_user_list = (req, res)=> {
    res.send('NOt IMPLEMENTED: user List for token');
}

// Display detail page for a specific user - Also for the token admins
exports.token_user_detail = (req, res)=> {
    res.send('NOT IMPLEMENTED: token user-s detail: '+req.param.id);
}

// The token can add a user 
exports.token_user_add_get = (req, res)=>{
    res.send('NOt IMPLEMENTED: GET Add a user to token');
}
exports.token_user_add_post = [
    (req, res)=>{
    res.send('NOt IMPLEMENTED: POST Add a user to token');
}]

// Display token user delete form on GET.
exports.token_user_delete_get = (req, res)=>{
    res.send('NOT IMPLEMENTED: token user delete GET');
};

// Handle user delete on POST.
exports.token_user_delete_post = [

    (req, res)=>{
    res.send('NOT IMPLEMENTED: user delete POST');
}];

// Display token user delete form on GET.
exports.token_user_update_get = (req, res)=>{
    res.send('NOT IMPLEMENTED: token user update GET');
};

// Handle user delete on POST.
exports.token_user_update_post = [
    
    (req, res)=>{
    res.send('NOT IMPLEMENTED: user update POST');
}];

exports.token_login_get = (req, res)=>{
    res.send('NOT IMPLEMENTED: token admin login GET');
}
exports.token_login_post =[ 
    (req, res)=>{
    res.send('NOT IMPLEMENTED: token admin login POST');
}]