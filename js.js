var button = document.getElementById('btninseretarea');
var body = document.body
document.getElementById('divtarefaaberta').remove()
var input = document.getElementById('inputinseretarefa')

input.focus();
input.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        criaElementos();
    }
    })
button.addEventListener('click', function(){
        criaElementos();     
})





