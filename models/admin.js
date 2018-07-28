// The User Schema used in generating the user model, to store users information

// Require Mongoose
var mongoose = require('mongoose');

// Define a schema
var Schema = mongoose.Schema;

var AdminSchema = new Schema(
    {
        username: {type: String, minlength:4, maxlength:12},
        email: {type: String,unique:true, trim: true, minlength:1},
        phone: {type: String, minlength:1},
        date_of_creation: {type: Date, default: Date.now},
        avatar_pics: {type: String},
    }
);

//--- Virtual methods

// Virtual for user name
AdminSchema.virtual('admin')
    .get(()=>{
        return this.username;
    });

AdminSchema.virtual('url')
    .get(()=>{
        return '/villey/admin/'+this._id;
    });

// Compile the model from schema
module.exports = mongoose.model('Admin', AdminSchema);