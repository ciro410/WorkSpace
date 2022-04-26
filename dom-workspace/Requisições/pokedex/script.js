const pokemon = document.querySelector('#pokemon')
const nome = document.querySelector('.nome')
const img  =  document.querySelector('.img')

pokemon.addEventListener('change' , () => {
    const promiseResposta = fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon.value);
    promiseResposta.then((resposta) =>{

        if (!resposta.ok){
            console.log('erro')
            pokemon.classList.add('.red')
        }

        const promiseBody = resposta.json();

        promiseBody.then((body)=>{
           nome.textContent =  body.name;
           img.src = body.sprites.front_default;
        })
    })

})
