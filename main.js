"strict mode";

const post = o => {
    if(o.toString().length < 2) return "0".concat (o)
    return o;
}
const tiempo = () => {
    const time = new Date();
    let horas = post (time.getHours());
    let minutos = post (time.getMinutes());
    let segundos = post (time.getSeconds());
    document.querySelector(".horas").textContent = horas;
    document.querySelector(".minutos").textContent = minutos;
    document.querySelector(".segundos").textContent = segundos;
}
setInterval(tiempo)
