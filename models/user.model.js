const bcrypt = require("bcryptjs/dist/bcrypt");
const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required:'FullName cant be empty'
  },
  email: {
    type: String,
    required:'email cant be empty',
    unique:true 

  },
  password: {
    type: String,
    required:'password cant be empty',
    minlength:[6, 'password must be atleast 4 character long'],
    

  },
  saltSecret: String,
});


 // email validation

 userSchema.path('email').validate((val) =>{

emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
return emailRegex.test(val);
 
 } ,' Invalid e-mail' )






userSchema.pre("save", function (next) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      this.password = hash;
      this.saltSecret = salt;
      next();
    });
  });
});

mongoose.model("User", userSchema);
