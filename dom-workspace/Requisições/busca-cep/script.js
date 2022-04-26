const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const cep = document.querySelector('#cep');
const cidade = document.querySelector('#cidade');
const rua = document.querySelector('#rua');
const numero = document.querySelector('#numero');


cep.addEventListener( 'change' , () => {
    if(!cep.value.length === 8){
            cidade.value = '';
            rua.value = '';
            numero.value = '';
    }
    const promiseResposta = fetch ('https://viacep.com.br/ws/'+cep.value+'/json/')

    promiseResposta.then((resposta)=>{

        const promiseBody = resposta.json();

        promiseBody.then((body)=>{
            cidade.value = body.localidade;
            rua.value = body.logradouro;
            numero.value = body.siafi

            
        })
    })
})