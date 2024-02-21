function enviar() {
    let numA = document.getElementById('campA').value
    let numB = document.getElementById('campB').value

    if (numB > numA) {
        alert(`Número ${numB} maior que o número ${numA}. Formulário válido, obrigado por participar!`)
    } else if (numA === '' || numB === '') {
        alert('[ERRO] Campo não preenchido.')
    } else {
        alert('Formulário inválido, o CAMPO B deve conter um número maior que o CAMPO A.')
    }
}