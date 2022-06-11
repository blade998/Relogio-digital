

function horas() {
    timerzone = new Date()  // comando que faz pegar o fuso horario e data 
    h = timerzone.getHours()   // pega as horas de new date
    m = timerzone.getMinutes()  // pega os minutos de new date
    s = timerzone.getSeconds()  // preciso nem dizer né
    tm =h+":"+m+":"+s
    document.querySelector('.relogio').innerHTML = tm  //pegui a class do html relogio e adicionei o elemento da funnction
}
   
setInterval(horas,10)   // set interval para o codigo a cima rodar em 1 em 1
