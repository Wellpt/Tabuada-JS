
function abrir() {
    let num = document.querySelector("#tabu").value
    let cont = 1
    let resul
        if (num <= 0) {
            alert("Numero inválido, digite um numero maior do que zero")
        }else {
            while (cont <= 10) {
                resul = (num * cont)
                cont++
                alert(resul)
        }
    }
}