var mongoose=require('mongoose');
var bcrypt=require('bcryptjs');

mongoose.connect('mongodb://gaurav:gaurav0635@ds155490.mlab.com:55490/personal');

var db=mongoose.connection;

// User Schema
var UserSchema=mongoose.Schema({
	username:{
		type:String,
		index:true
	},
	password:{
		type:String
	},
	email:{
		type:String
	},
	name:{
		type:String
	}
});

var User=module.exports=mongoose.model('User','UserSchema');

module.exports.createUser=function(newUser,callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}














