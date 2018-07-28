// The Token Schema used in generating the Token model, to store Tokens information

// Require Mongoose
var mongoose = require('mongoose');

// Define a schema
var Schema = mongoose.Schema;

var TokenSchema = new Schema(
    {
        title: {type: String},
        description: {type: String},
        token_avatar: [{type: String}],
        token_value: {type: Number},
        owner: {type: Schema.ObjectId, ref: 'Company'},
        // category: [{type: Schema.ObjectId, ref: 'TokenCategory'}],
        date_created: {type: Date, default: Date.now()},
        date_deleted: {type: Date, default:Date.now()}
    }
);

//--- Virtual methods

// Virtual for Token name
TokenSchema.virtual('token')
    .get(function(){
        return this.title;
    });
// Virtual for Token id
TokenSchema.virtual('token_id')
    .get(function(){
        return this._id;
    });

TokenSchema.virtual('url')
    .get(function(){
        return '/villey/token/'+this._id;
    });


// Compile the model from schema
module.exports = mongoose.model('Token', TokenSchema);