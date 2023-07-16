// let today = new Date() //забиваем через этот метод дату в реальном времени
// console.log(today)

// console.log(today.toDateString())//дата в строчку записана только дата
// console.log(today.toTimeString())//время забито в строчку

// let ny = new Date('2024-01-01')
// console.log(ny)
// console.log(ny.getTime())
// console.log(today.getTime())// 01-01-1970 точка отсчета в милисекундах до сегодняшней дату

// console.log(ny - today)//считаем сколько милисекунд от сегодняшнего дня до нового года

let time1 = document.getElementById('time1')
let time2 = document.getElementById('time2')
let time3 = document.getElementById('time3')
let inp = document.getElementById('inp')
let but1 = document.getElementById('but1')

let london = document.getElementById('london')
let moscow = document.getElementById('moscow')
let vladiv = document.getElementById('vladiv')

function dony() {
    let today = new Date()
    let ny = new Date('2024-01-01')
    let total = ny - today
    let days = total / 1000 / 60 / 60 / 24
    let t1 = parseInt(days) //дни считаем
    let t2 = parseInt((days - t1) * 24 - 3) // часы
    let t3 = parseInt(((days - t1) * 24 - 3 - t2) * 60) // минуты
    let t4 = parseInt(((((days - t1) * 24 - 3 - t2) * 60) - t3) * 60 + 1)
    // console.log(parseInt(days))//округление до дней отбрасывая хвост
    // console.log((days-parseInt(days))*24-3)//считаем с хвоста сколько часов и выбрасываем три часа так как у нас отсчет идет по москве а это плюс 3 часа по гринвичу( +1 прибавили тут просто потому что не совпадали дата и отсчет до нового года)
    // console.log(t1, t2, t3, t4)
    time1.innerHTML = '<h3>' + t1 + ' дней ' + t2 + ' часов ' + t3 + ' минут ' + t4 + ' секунд ' + '</h3>'

}

function prostotime() {
    let today = new Date()
    console.log(today.getHours()) // getDate getMonth getYear это берем в данный момент день месяц год
    console.log(today.getMinutes())
    console.log(today.getSeconds())

    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()

    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    time2.innerHTML = hours + ':' + minutes + ':' + seconds


    // if (today.getHours() < 10 && today.getMinutes() < 10 && today.getSeconds() < 10) {
    //     time2.innerHTML = '0' + today.getHours() + ':' + '0'+ today.getMinutes() + ':' + '0'+ today.getSeconds()
    // }
    // else if (today.getHours() < 10 && today.getMinutes() > 10 && today.getSeconds() > 10) {
    //     time2.innerHTML = '0' + today.getHours() + ':' + today.getMinutes() + ':' +  today.getSeconds()
    // }
    //  else if (today.getHours() > 10 && today.getMinutes() < 10 && today.getSeconds() > 10) {
    //     time2.innerHTML = today.getHours() + ':' + '0' + today.getMinutes() + ':' + today.getSeconds()
    // }
    //  else if (today.getHours() > 10 && today.getMinutes() > 10 && today.getSeconds() < 10) {
    //     time2.innerHTML = today.getHours() + ':' + today.getMinutes() + ':' + '0' + today.getSeconds()
    // }
    // else {
    //     time2.innerHTML = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
    // }

}
function prostotime1() {
    let today = new Date()
    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()
    
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    moscow.innerHTML = hours + ':' + minutes + ':' + seconds
}

function prostotime2() {
    let today = new Date()
    let hours = today.getHours()-2
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()
    
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    london.innerHTML = hours + ':' + minutes + ':' + seconds
}
function prostotime3() {
    let today = new Date()
    let hours = today.getHours()+7
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()
    
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    vladiv.innerHTML = hours + ':' + minutes + ':' + seconds
}

setInterval(function () {
    dony()
    prostotime()
    prostotime1()
    prostotime2()
    prostotime3()
}, 1000)

but1.onclick = dony1


function dony1() {
    let today = new Date()
    let ny = new Date(inp.value)
    let total = ny - today
    let days = total / 1000 / 60 / 60 / 24
    let t1 = parseInt(days) //дни считаем
    let t2 = parseInt((days - t1) * 24 - 3) // часы
    let t3 = parseInt(((days - t1) * 24 - 3 - t2) * 60) // минуты
    let t4 = parseInt(((((days - t1) * 24 - 3 - t2) * 60) - t3) * 60 + 1)
    // console.log(parseInt(days))//округление до дней отбрасывая хвост
    // console.log((days-parseInt(days))*24-3)//считаем с хвоста сколько часов и выбрасываем три часа так как у нас отсчет идет по москве а это плюс 3 часа по гринвичу( +1 прибавили тут просто потому что не совпадали дата и отсчет до нового года)
    // console.log(t1, t2, t3, t4)
    time3.innerHTML = '<h3>' + t1 + ' дней ' + t2 + ' часов ' + t3 + ' минут ' + t4 + ' секунд ' + '</h3>'
    setInterval(function () {
        dony1()
    }, 1000)
}



