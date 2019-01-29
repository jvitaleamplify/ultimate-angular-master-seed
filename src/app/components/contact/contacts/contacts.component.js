var contacts = {
    bindings:{
        contacts:'<'
    },
    templateUrl : './contacts.html',
    controller: 'ContactsController'
};

angular
.module('components.contact')
.component('contacts', contacts)
.config(function($stateProvider){
    $stateProvider.state('contacts', {
        parent:'app',
        url:'/contacts',
        component:'contacts'
    })
})