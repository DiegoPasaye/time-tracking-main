let datos = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

let links = document.getElementsByTagName("a")
let workTime = document.querySelector(".work-time")
let playTime = document.querySelector(".play-time")
let studyTime = document.querySelector(".study-time")
let exerciseTime = document.querySelector(".exercise-time")
let socialTime = document.querySelector(".social-time")
let selfTime = document.querySelector(".self-time")

let lastTime = document.querySelectorAll(".last-week")

const times = [workTime, playTime, studyTime, exerciseTime, socialTime, selfTime]
const time = "weekly"

links[0].addEventListener("click", () => {
    for(let i = 0; i <= 7; i++){
        times[i].classList.toggle("mostrar")
        lastTime[i].classList.toggle("mostrar")
        times[i].innerHTML = datos[i].timeframes.daily.current + "hrs"
        lastTime[i].innerHTML = "Yesterday - " + datos[i].timeframes.daily.previous + "hrs"
    }
})
links[1].addEventListener("click", () => {
    for(let i = 0; i <= 7; i++){
        times[i].classList.toggle("mostrar")
        lastTime[i].classList.toggle("mostrar")
        times[i].innerHTML = datos[i].timeframes.weekly.current + "hrs"
        lastTime[i].innerHTML = "Last Week - " + datos[i].timeframes.weekly.previous + "hrs"
    }
})
links[2].addEventListener("click", () => {
    for(let i = 0; i <= 7; i++){
        times[i].classList.toggle("mostrar")
        lastTime[i].classList.toggle("mostrar")
        times[i].innerHTML = datos[i].timeframes.monthly.current + "hrs"
        lastTime[i].innerHTML = "Last Month - " + datos[i].timeframes.monthly.previous + "hrs"
    }
})