function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos!`
    if (hora >= 0 && hora < 4) {
        img.src = './img/madrugada.png'
        document.body.style.background = '#6f5853'
    } else if (hora >= 5 && hora < 12) {
        img.src = './img/manha.png'
        document.body.style.background = '#81b5bd'
    }else if ( hora >= 13 && hora < 18){
        img.src = './img/tarde.png'
        document.body.style.background = '#fe8229'
     }else {
        img.src = './img/noite.png'
        document.body.style.background = '#040c1e'
     }
}