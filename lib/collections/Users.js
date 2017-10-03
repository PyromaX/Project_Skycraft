CreateUserAttributeSchema = new SimpleSchema({
    username : {
        type: String,
        label: "Pseudo",
        max: 35
    },
    password: {
        type:String,
        label: "Password"
    },
    email: {
        type:SimpleSchema.RegEx.Email,
        label: "Email"
    }
});

Meteor.methods({
   createNewUser: function (userAttributes) {
       check(userAttributes, CreateUserAttributeSchema);
       let newUser = _.extend(userAttributes, {
           profile:{
               signInDate : new Date()
           } });
       userId = Accounts.createUser(newUser);

        return userId;
   }
});