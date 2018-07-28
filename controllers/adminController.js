
var User = require('../models/user');
var Token = require('../models/token');

exports.index = (req, res)=>{
    // res.send('Not implemented: villey homepage');
    res.render('login', {title: "User Authentication"});
}

// Display list of all users- For the project admins
exports.user_list = function(req, res) {
    res.send('NOt IMPLEMENTED: user List');
}

// Display detail page for a specific user - Also for the project admins
exports.user_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: user detail: '+req.param.id);
}

// CREAte user
exports.user_create_get = (req, res) =>{
    res.send('NOT IMPLEMENTED: company create GET');
}
exports.user_create_post = (req, res) =>{
    res.send('NOT IMPLEMENTED: company create POST');
}

// CREAte company
exports.company_create_get = (req, res) =>{
    res.send('NOT IMPLEMENTED: company create GET');
}
exports.company_create_post = (req, res) =>{
    res.send('NOT IMPLEMENTED: company create POST');
}

// CREAte admin
exports.admin_create_get = (req, res) =>{
    res.send('NOT IMPLEMENTED: admin create GET');
}
exports.admin_create_post =[
    (req, res) =>{
    res.send('NOT IMPLEMENTED: admin create POST');

}]


// Handle user delete on GET.
exports.user_delete_get = (req, res)=>{
    res.send('NOT IMPLEMENTED: user delete POST');
};
// Handle user delete on POST.
exports.user_delete_post = [
    (req, res)=>{
    res.send('NOT IMPLEMENTED: user delete POST');
}];

// Display company user delete form on GET.
exports.user_update_get = (req, res, next)=>{
    res.send('NOT IMPLEMENTED: Company user update GET');
};

// Handle user delete on POST.
exports.user_update_post = [
    (req, res)=>{
    res.send('NOT IMPLEMENTED: user update POST');
}];

exports.add_token_to_user = [
    console.log('TEster'),
    (req, res)=>{
        res.send('NOT IMPLEMENTED POST: USER gets token from admin '+req.param.id);
    }
]

exports.login_get = (req, res,next)=>{
    res.send('NOT IMPLEMENTED: Company admin login GET');
}
exports.login_post = (req, res, next)=>{
    res.send('NOT IMPLEMENTED: Company admin login POST');
}


