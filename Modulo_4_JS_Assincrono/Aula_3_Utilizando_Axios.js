axios.get('https://api.github.com/users/KevsonDoc')
    .then(function(response) {
        console.log(response);
        var bodyElement = document.querySelector('body');
        var divElement = document.createElement('div');
        var imgElement = document.createElement('img');
        var link = response.data.avatar_url;
        console.log(link)
        imgElement.setAttribute('src', link);
        divElement.appendChild(imgElement);
        bodyElement.appendChild(divElement);
        bodyElement.style.backgroundColor = 'blue';

    })
    .catch(function(error) {
        console.warn('Erro')
        bodyElement = document.querySelector('body');
        var titleElement = document.createElement('h1');
        var texElement = document.createTextNode('Erro 404');
        titleElement.appendChild(texElement);
        bodyElement.appendChild(titleElement);
    });