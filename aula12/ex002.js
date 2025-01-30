var agora = new Date ()
var hora = agora.getHours (); agora.getMinutes ()
var minagora = new Date()
var minagr = minagora.getMinutes() 
var seconds = new Date ()
var secon = seconds.getSeconds()
console.log(`agora são exatamente  ${hora} horas e ${minagr} minutos e ${secon} segundos`) 

if (hora <12){
    console.log(`bom dia`)
}else if (hora <=18){
    console.log(`boa tarde`)
}else if (hora <=18){
    console.log(`boa tarde`)

}else if (hora === 0){
    console.log(`boa madrugada`)
}


