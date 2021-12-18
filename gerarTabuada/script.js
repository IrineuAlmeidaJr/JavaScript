function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ""
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            // text -> é a parte de dentro do option
            item.text = `${n} x ${c} = ${n*c}`
            // Preciso colocar o campo 'value' que servira quando
            //for usar PHP ou outra linguagem backend, ai consigo
            //saber qual foi o item selecionado na tabela
            item.value = `tab${c}`        
            //Coloco para adicionar um filho abaixo
            tab.appendChild(item)
        }
    }
}