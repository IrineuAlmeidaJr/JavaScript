function verificar() {
    let data = new Date()
    let ano = data.getFullYear() //é para pegar o ano completo com 4 digitos
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    //Abaixo o primeiro faz a verificação se o usuário não está inserindo data negativa ou data futura, pois isso não é possível
    if (fano.value.length == 0 || fano.value > ano || fano.value < 0) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        //let boxImg = document.getElementById('img')
        let fsex = document.getElementsByName('radsex')
        let idade = ano - fano.value
        let genero = ''
        //Abaixo crio um atributo do tipo 'img'
        let img = document.createElement('img')
        //Abaixo crio um atributo com setAttribute
        img.setAttribute('id', 'foto')


        if (fsex[0].checked) {
            genero = 'homem'
            if(idade < 12) {
                // Crianca
                img.setAttribute('src', './imagens/bebe-h.png')
            } else if (idade < 24) {
                //Jovem
                img.setAttribute('src', './imagens/jovem-h.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', './imagens/adulto-h.png')
            } else {
                //Idoso
                img.setAttribute('src', './imagens/idoso-h.png')
            }
        } else {
            genero = 'mulher'
            if(idade < 12) {
                // Crianca
                img.setAttribute('src', './imagens/bebe-m.png')
            } else if (idade < 24) {
                //Jovem
                img.setAttribute('src', './imagens/jovem-m.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', './imagens/adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', './imagens/idoso-m.png')
            }            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        // appendChild -> vai adicionar um elemento img após a frase de html
        res.appendChild(img)

        // Essa parte coloquei, pois estava dando erro, mas depois funcionou corretamente o alinhamento da imagem ao centro, não precisei colocar ao código abaixo que estava associado a uma tag div lá no Html.
        // boxImg.style.textAlign = 'center'
        // boxImg.innerHTML = null
        // boxImg.appendChild(img)        
    }
}