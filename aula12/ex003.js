var agora = new Date()
var diaSem = agora.getDay()
/*
 0 = Dormingo
 1 = segunda
 2 = terça
 3 = Quarta
 4 = quinta
 5 = sexta
 6 = Sábado
*/

//console.log(diaSem)
switch(diaSem) {
    case 0:
        console.log('Dormigo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Dia Invalido')
        break
}