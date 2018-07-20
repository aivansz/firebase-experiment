const selector = function(element){
    return document.querySelector(element);
}

const sendButton = selector('#send-button');

const getInputValue = function(element){
    return selector(element).value;   
}

getInputValue('#send-button');

sendButton.addEventListener('click', function(event){
    let login = getInputValue('#login-input');
    let password = getInputValue('#password-input');
    loginFirebase(login, password);
});



const loginFirebase = function(login, password){

    firebase.auth()
        .signInWithEmailAndPassword(login, password)
        .catch(function(error){
            console.log(error.code);
            console.log(error.message);
        });

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              var displayName = user.displayName;
              var email = user.email;
              var emailVerified = user.emailVerified;
              var photoURL = user.photoURL;
              var isAnonymous = user.isAnonymous;
              var uid = user.uid;
              var providerData = user.providerData;
              console.log(user);
              // ...
            } else {
                console.log('usuário não encontrado');
            }
          });

}

