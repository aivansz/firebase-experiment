const selector = function(element){
    return document.querySelector(element);
}

const sendButton = selector('#send-button');

const getInputValue = function(element){
    return selector(element).value;   
}

console.log('code');

getInputValue('#send-button');

sendButton.addEventListener('click', function(event){
    console.log('clicked', event);
    let login = getInputValue('#login-input');
    let password = getInputValue('#password-input');
    console.log(login);
    console.log(password);
});



/*const login = function(login, password){

}*/