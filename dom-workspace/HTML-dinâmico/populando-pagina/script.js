const root = document.querySelector('body')

fetch('https://jsonplaceholder.typicode.com/albums/1/photos') .then((resposta)=>{
    const promiseBody = resposta.json();
    promiseBody.then((body)=>{
       body.forEach((photos)=>{
        const div = document.createElement('div');
        div.classList.add('teste')

        const titulo = document.createElement('h1');
        titulo.textContent = photos.title;
        
        const url = document.createElement ('img');
        url.src = photos.url;

        div.append(titulo,url);

        root.append(div)




           
       })
    })
})






 