const button = document.querySelector('.button-ligth-dark')


button.addEventListener('click',()=>{
    document.body.classList.toggle('ligth-mod')
})

const nome = document.querySelector('input')
const msg = document.querySelector('textarea')
const btn = document.querySelector('.btn-submit')

btn.addEventListener('click',(event)=>{
    event.preventDefault
    const numero = "558799412016";
    const texto = `ola, me chamo ${nome.value},${msg.value}`;
    const formtText = encodeURIComponent(texto);
    const url = `https://wa.me/${numero}?text=${formtText}`;
    window.open(url,'_blank')
    nome.value="";
    msg.value="";
})



