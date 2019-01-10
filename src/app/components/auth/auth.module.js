angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function ($firebaseRefProvider) {
    
    var config = {
      apiKey: "AIzaSyAWFNVP_fSQfvOWd_OnTkieI7u4hCqFRXY",
      authDomain: "contacts-manager-angluarjs-pro.firebaseapp.com",
      databaseURL: "https://contacts-manager-angluarjs-pro.firebaseio.com",
      projectId: "contacts-manager-angluarjs-pro",
      storageBucket: "contacts-manager-angluarjs-pro.appspot.com",
      messagingSenderId: "1063123046648"
    };

    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        contacts: config.databaseURL + '/contacts',
      });

    firebase.initializeApp(config);
  })
