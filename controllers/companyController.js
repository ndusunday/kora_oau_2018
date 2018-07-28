
var User = require('../models/user');
var Token = require('../models/token');
var Company = require('../models/company');
var Admin = require('../models/admin');

exports.company_index = (req, res)=>{
    // res.send('NOt IMPLEMENTED: Company welcome page');
    res.render("dashboard", {title: "Company Login"});
}

// Display list of all users- For the COMPANY admins
exports.company_user_list = (req, res)=> {
    res.send('NOt IMPLEMENTED: user List for Company');
}

// Display detail page for a specific user - Also for the COMPANY admins
exports.company_user_detail = (req, res)=> {
    res.send('NOT IMPLEMENTED: Company user-s detail: '+req.param.id);
}

// The company can add a user 
exports.company_user_add_get = (req, res)=>{
    res.send('NOt IMPLEMENTED: GET Add a user to Company');
}
exports.company_user_add_post = [
    (req, res)=>{
    res.send('NOt IMPLEMENTED: POST Add a user to Company');
}]

// Display company user delete form on GET.
exports.company_user_delete_get = (req, res)=>{
    res.send('NOT IMPLEMENTED: Company user delete GET '+req.param.id);
};

// Handle user delete on POST.
exports.company_user_delete_post = [

    (req, res)=>{
    res.send('NOT IMPLEMENTED: user delete POST'+ req.param.id);
}];

// Display company user update form on GET.
exports.company_user_update_get = (req, res)=>{
    res.send('NOT IMPLEMENTED: Company user update GET '+req.param.id);
};

// Handle user update on POST.
exports.company_user_update_post = [
    
    (req, res)=>{
    res.send('NOT IMPLEMENTED: user update POST' +req.param.id);
}];

exports.add_token_to_user = [

    (req, res)=>{
        res.send('NOT IMPLEMENTED POST: USER gets token from admin '+req.param.id);
    }
]

exports.company_login_get = (req, res)=>{
    res.send('NOT IMPLEMENTED: Company admin login GET');
}
exports.company_login_post = (req, res)=>{
    res.send('NOT IMPLEMENTED: Company admin login POST');
}





