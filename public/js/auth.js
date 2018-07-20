'use strict'

function login(user, password){
    firebae.auth()
}

function createUser(event, user, password){
    event.preventDefault();
    firebase.auth()
        .createUserWithEmailAndPassword(user, password)
        .catch(function(error){
            console.log(error.code);
            console.log(error.message);
        })
}

