
function abrir() {
    let num = document.querySelector("#tabu").value
    let tab = document.querySelector("#seltab")
    let cont = 1
        if (num <= 0) {
            alert("Numero inválido, digite um numero maior do que zero")
        }else {
            tab.innerHTML = "" // isso garante que nao vai aparecer uma nova tabuada por baixo da outra
            for (cont=1; cont <= 10; cont++) {
                let item = document.createElement("option") // isso aqui ta criando um valor dentro do select
                item.text = `${num} x ${cont} = ${num*cont}`
                item.value = `tab ${cont}`
                tab.appendChild(item) // aqui esta criando elemento filho para mostrar o item (options do Select)
        }
    }
}