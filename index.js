const date = document.getElementById('date')
const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
const hrs = document.getElementById('hrs')
const min = document.getElementById('min')
const sec = document.getElementById('sec')

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const func = () => {
    const today = new Date();
    date.innerHTML = (today.getDate()<10 ? "0" : "") + today.getDate()
    day.innerHTML = weekDays[today.getDay()]
    month.innerHTML = monthNames[today.getMonth()]
    year.innerHTML = today.getFullYear()
    hrs.innerHTML = (today.getHours()< 10 ? "0" : "") + today.getHours()
    min.innerHTML = (today.getMinutes()< 10 ? "0" : "" ) + today.getMinutes()
    sec.innerHTML = (today.getSeconds()<10 ? "0" : "") + today.getSeconds()
}

setInterval(func, 1000)

