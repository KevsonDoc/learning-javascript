/*AJAX - É uma requisição assimcrona que realiza augun backend que é uma forma de requisitar informações do servidor sem precisar recarregar a página.*/
var xhr = new XMLHttpRequest(); //da acesso a essa funionalidade

xhr.open('GET', 'https://api.github.com/users/KevsonDoc');
xhr.send(null);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}

/*AJAX vai ser a principal forma de consumir informações de servidor*/