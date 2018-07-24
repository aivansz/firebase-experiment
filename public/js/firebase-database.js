const database = firebase.database();

const listPages = function(path){
    return database.ref(path).once('value');
}



listPages('/pages').then(function(pages){
    console.log(pages.val());
});