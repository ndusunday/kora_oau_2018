#! /usr/bin/env node

console.log('This script populates some test users, others to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return;
}

var async = require('async')

var User = require('./models/user')
var Admin = require('./models/admin')
var Token = require('./models/token')
var Company = require('./models/company')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var users = []
var admins = []
var tokens = []
var companies = []


// Create a new user
function userCreate(username, email, phone, date_of_creation,avatar_pics, token_value, rank, cb) {
  userdetail = {username:username, email: email, phone: phone, token_value: token_value, rank: rank}
  if (avatar_pics != false) userdetail.avatar_pics = avatar_pics
  else userdetail.avatar_pics = "";
  if (date_of_creation != false) userdetail.date_of_creation = date_of_creation;
  userdetail.date_of_creation = Date.now();
  
  var user = new User(userdetail);
       
  user.save(function (err) {
    if(err){
        console.log('ERROR Creating user: '+ user.username);
        cb(err, null)
        return
      }
      console.log('Created New User: ' +user.username);
      users.push(user)
      cb(null, user)     
  });
}

// Create a freelancer
function tokenCreate(title,description, token_avatar, date_created, date_deleted, cb){
  token_detail = {
    title: title,
    description: description,
    token_avatar: token_avatar,
  }
  if (date_created != false) token_detail.date_created = date_created;
  if (date_deleted != false) token_detail.date_created = date_deleted;
  // if (owner != false) token_detail.owner = owner

  var token = new Token(token_detail);
  token.save(function(err){
    if(err){
      console.log('ERROR Creating Token: '+ token);
      cb(err, null)
      return
    }
    console.log('New Token: '+ token);
    cb(null, token)
    tokens.push(token)  
    
  });
}

// Create a freelancer
function companyCreate(name, type,description, media,token_cashout, company_users, date_created, date_deleted, cb){
    company_detail = {
      name: name,
      type: type,
      description: description,
      media: media,
      token_cashout: token_cashout,
    }
    if (date_created != false) company_detail.date_created = date_created;
    if (date_deleted != false) company_detail.date_created = date_deleted;
    if (company_users != false) company_detail.company_users = company_users
    
    var company = new Company(company_detail);
    company.save(function(err){
      if(err){
        console.log('ERROR Creating Token: '+ company);
        cb(err, null)
        return
      }
      console.log('New Token: '+ company);
      cb(null, company)
      companies.push(company)  
  
    });
  }


// ---- Start creating mock data ---- ////

function createUsers(cb){
  async.parallel([
    function(callback){
      userCreate('konga2311', 'johnmendel@gmail.com', '08004780000', false, false, 130, "Regular", callback)
    },
    function(callback){
      userCreate('koa2311', 'johmendel@gmail.com', '08004440000', false, false, 130, "Regular", callback)
    },
    function(callback){
      userCreate('kasd2311', 'johnmndel@gmail.com', '080005550000', false, false, 130, "Regular", callback)
    },
    function(callback){
      userCreate('kona2311', 'johendel@gmail.com', '08056000000', false, false, 130, "Regular", callback)}
  ], cb)
}

function createCompanies(cb) {
  async.parallel([
    function(callback){
        companyCreate("Konga","Ecommerce", "Blah Blah", false, "500", users, false, false, callback)
    },
    function(callback){
        companyCreate("Konga","Ecommerce", "Blah Blah", false, "500", users, false, false, callback)
    },
    function(callback){
        companyCreate("Konga","Ecommerce", "Blah Blah", false, "500", users, false, false, callback)
    }
  ], cb)
}

function createTokens(cb) {
    async.parallel([
      function(callback){
        tokenCreate("Simple Token", "This is for basic purchase", false, 10, false, callback)
      },
      function(callback){
          tokenCreate("Middle Token", "This is for medium purchase", false, 20, false, callback)
      },
      function(callback){
          tokenCreate("Heavy Token", "This is for heavy purchase", false, 50, false, callback)
      }
    //   function(callback){
    //     tokenCreate("Heavy Token", "This is for heavy purchase", false, 50, companies[2], false, callback)
    // }
    ], cb)
  }

async.series([
    // createUsers,
    createCompanies,
    createTokens
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Done, List of all Users: '+users);
    }
    // All done, disconnect from database
    mongoose.connection.close();
});



