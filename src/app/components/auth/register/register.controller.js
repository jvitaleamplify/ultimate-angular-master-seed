function RegisterController(AuthService){
    var ctrl = this;
    ctrl.$onInit = function(){
        ctrl.error = null;
        ctrl.user = {
            email : '',
            password : ''
        };
    };
    ctrl.createUser = function(event){
        console.log(event.user);
        return AuthService
        .register(event.user)
        .then(function(user){
            console.log('SUCCESS');
        }, function(reason){
            ctrl.error = reason.message;
        });
    };
}

angular.module('components.auth').controller('RegisterController', RegisterController);