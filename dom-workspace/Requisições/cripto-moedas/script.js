const criptoInput = document.querySelector("#cripto");
const maiorValor = document.querySelector('.valor')

criptoInput.addEventListener('change' , () =>{
     if (!criptoInput.value){
         return;
     }
    const promiseResposta = fetch('https://www.mercadobitcoin.net/api/'+ criptoInput.value +'/ticker/');

    promiseResposta.then( (resposta)=>{
        const promiseBody = resposta.json();

        promiseBody.then((body)=>{
            maiorValor.textContent = Number(body.ticker.high).toFixed(2)
        })
    });
})
