let listaNum = []

function existe(n) {
    //let exist = false
    // for(i in listaNum) {
    //     if(n == listaNum[i]) {
    //         exist = true
    //     }
    // }
    // return exist

    //  Posso fazer da seguinte forma, procurando
    //se tenho o valor dentro do Array
    if(listaNum.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#listaNum')

    if(num.value.length == 0) {
        alert('Campo vazio, digite um número entre 1 e 100!')
    } else {
        let n = Number(num.value)
        if(n > 0 && n <= 100) {
            if(!existe(n)) {
                let item = document.createElement('option')
                item.text = `Valor ${n} adicionado.`
                item.value = `tab${n}`
                tab.appendChild(item)
                listaNum.push(n)
                res.innerHTML = ''
            } else {
                alert('Número já inserido na Lista!')
            }    
            
        } else {
            alert('Número fora da faixa de valor!')
        }        
    }
    num.value = ""
    //Abaixo é para votar o curso, para o foco ficar na caixa
    //para digitar o número
    num.focus()
}

function maior() {
    let maior = listaNum[0]
    for(i in listaNum) {
        if(listaNum[i] > maior) {
            maior = listaNum[i]
        }
    }
    return maior;
}

function menor() {
    let menor = listaNum[0]
    for(i in listaNum) {
        if(listaNum[i] < menor) {
            menor = listaNum[i]
        }
    }
    return menor;
}

function soma() {
    let soma = Number(0)
    for(i in listaNum) {
        soma += listaNum[i]
    }
    return soma
}
function media() {
    return soma() / listaNum.length
}

function finalizar() {
    let res = document.getElementById('res')
    
    if(listaNum.length > 0) {
        res.innerHTML = `<p>Ao todo, temos ${listaNum.length} números cadastrados</p>`
    
        res.innerHTML += `<p>O maior valor informado foi ${maior()}</p>`

        res.innerHTML += `<p>O menor valor informado foi ${menor()}</p>`

        res.innerHTML += `<p>Somando todos os valores, temos ${soma()}</p>`

        res.innerHTML += `<p>A média dos valores digitados é ${media()}</p>`
    } else {
        alert('Adicione valores antes de finalizar!')
    }

}