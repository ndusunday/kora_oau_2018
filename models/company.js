// The Company Schema used in generating the Company model, to store Skills information

// Require Mongoose
var mongoose = require('mongoose');

// Define a schema
var Schema = mongoose.Schema;

var CompanySchema = new Schema(
    {
        name: {type: String},
        type: {type: String},
        description: {type: String},
        media: [{type: String}],
        token_cashout: {type: Number},
        company_users: [{type: Schema.ObjectId, ref:'User'}],
        date_created: {type: Date, default: Date.now()},
        date_deleted: {type: Date, default:Date.now()}
    }
);

//--- Virtual methods

// Virtual for Company name
CompanySchema.virtual('company')
    .get(function(){
        return this.name;
    });

CompanySchema.virtual('company-users')
    .get(function(){
        return this.company_users;
    });

CompanySchema.virtual('url')
    .get(function(){
        return '/villey/company/'+this._id;
    });



// Compile the model from schema
module.exports = mongoose.model('Company', CompanySchema);