function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto' )
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'crinça.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem.jpg')
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto.jpg')
            }
            else {
                //Idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10){
                //Criança
            } else if (idade < 21){
                //jovem
            }
            else if (idade < 50) {
                //Adulto
            }
            else {
                //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Agora descobri que é ${genero} do ano de ${idade}.`
    }
    res.appendChild(img)
}