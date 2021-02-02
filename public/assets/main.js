//window.onload(document.getElementById('projeto').style.display='none');


var projeto = document.getElementById('projeto');
var sobre = document.getElementById('sobre');

function mostraProjetos(){
    projeto.style.display = 'block';
    sobre.style.display = 'none';

}

function mostraSobre(){
    sobre.style.display = 'block';
    projeto.style.display = 'none';
}
