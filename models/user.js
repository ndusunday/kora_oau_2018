// The User Schema used in generating the user model, to store users information

// Require Mongoose
var mongoose = require('mongoose');

// Define a schema
var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        username: {type: String, minlength:4, maxlength:12},
        email: {type: String,unique:true, trim: true, minlength:1},
        phone: {type: String, minlength:1},
        date_of_creation: {type: Date},
        avatar_pics: {type: String},
        token_value: {type: Number},
        rank: {type: String, enum: ['Regular', 'Standard', 'New Commer'] },
    }
);

//--- Virtual methods

// Virtual for user name
UserSchema.virtual('user')
    .get(()=>{
        return this.username;
    });

// UserSchema.virtual('token_value')
//     .get(()=>{
//         return this.token_value;
//     });
UserSchema.virtual('user_rank')
    .get(()=>{
        return this.rank;
    })

UserSchema.virtual('url')
    .get(()=>{
        return '/villey/user/'+this._id;
    });


// Compile the model from schema
module.exports = mongoose.model('User', UserSchema);