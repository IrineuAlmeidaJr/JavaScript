function carregar() {
    let data = new Date()
    let hora = data.getHours()
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora < 12) {
        msg.innerHTML += '\nBom Dia';
        img.src = './imagens/dia.png'
        document.body.style.background = '#fed5a2'
        
    } else if (hora < 18) {
        msg.innerHTML += '\nBoa Tarde'
        img.src = './imagens/tarde.png'     
        document.body.style.background = '#fbca83'  
    } else {
        msg.innerHTML += '\nBoa Noite'
        img.src = './imagens/noite.png'
        document.body.style.background = '#669ac3'
    } 
}
