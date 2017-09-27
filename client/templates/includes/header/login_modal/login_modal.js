Template.loginModal.helpers({
    //add you helpers here
    passwordError: function () {
        return Template.instance().passwordError.get()
    }
});

Template.loginModal.events({
    //add your events here
    'submit [login]': function (event) {
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;
        Meteor.loginWithPassword(email, password, function (error) {
            if (error){
                Materialize.toast(error.message, 6000, 'red')();
            }
            else {
                $('#modal1').modal('close');
            }
        });
    },
    'keyup [password-repeat]': function (event, instance) {
        let password = $('#signin-password').val();
        let passwordRepeat = $('#password-repeat').val();
        let errorMessage;
        if (passwordRepeat === password) {
            errorMessage = ""
        } else {
            errorMessage = "Les Passwords ne sont pas identiques"
        }
        instance.passwordError.set(errorMessage)
    },
    'submit [signin]': function (event, instance) {
        event.preventDefault();
        if(instance.passwordError.get() === ""){
            let password = event.target.password.value;
            let passwordRepeat = event.target.passwordRepeat.value;
            let pseudo = event.target.signinPseudo.value;
            let email = event.target.signinEmail.value;
            if(passwordRepeat === password){
                let userAttribute = {
                    username : pseudo,
                    password : password,
                    email : email
                };
                Meteor.call('createNewUser', userAttribute, function (error, result) {
                    if(error){
                        Materialize.toast(error.message, 6000, 'red')
                    }else{
                        Meteor.loginWithPassword(email, password, function (error) {
                            Router.go("home");
                            Materialize.toast("Bienvenue sur Skycraft", 6000, 'green');
                            $('#modal1').modal('close')
                        });
                    }
                } )
            }else{
                instance.passwordError.set("Le formulaire n'est pas valide");
            }
        }else{
            Materialize.toast("Le formulaire d'inscription n'est pas valide", 6000, 'red');
        }

    }
});

Template.loginModal.onCreated(function () {
    //add your statement here
    this.passwordError = new ReactiveVar()
});

Template.loginModal.onRendered(function () {
    //add your statement here
    $('input').characterCounter();
});

Template.loginModal.onDestroyed(function () {
    //add your statement here
});

