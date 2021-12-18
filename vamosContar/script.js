function contar() {
    let txtInicio = document.getElementById("txtinicio")
    let txtFim = document.getElementById("txtfim")
    let txtPasso = document.getElementById("txtpas")
    let txt = document.getElementById("exibirContar")

    let inicio = txtInicio.value
    let fim = txtFim.value
    let passo = Number(txtPasso.value)

    // Poderia testar o número contando o seu tamanho,
    //ao exemplo, fim.value.length == 0 , ai está vazio

    if(inicio == "" || fim == "") {
        txt.innerHTML = "Impossível contar!"
    } else {
        inicio = Number(inicio)
        fim = Number(fim)        
        if(inicio < fim) {
            if(passo == 0) {
                alert("Passo inválido! Considerando PASSO 1")
                passo = 1
            } 
            txt.innerHTML = "" 
            while(inicio <= fim) {
                txt.innerHTML += `${inicio} 👉` 
                // se quiser colocar com formato unicode, colocar 
                // `\u{1F$$()}`   -> só funcionar se for escrito
                //entre crase
                inicio += passo
            }
            txt.innerHTML += `🏁`
        } else {
            alert("Início Menor ou Igual que o Fim!")
            txt.innerHTML = ""            
        }
    }
    

    
}