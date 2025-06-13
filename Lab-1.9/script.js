let finalArray = [0]
let startTime = null
let timerInterval = null

const styles = ['type1', 'type2', 'type3', 'type4', 'type5']

// функція запуску тайме ра
function startTimer() {
  startTime = Date.now()

  timerInterval = setInterval(() => {
    const currentTime = Date.now()
    const secondsElapsed = Math.floor((currentTime - startTime) / 1000)

    if (secondsElapsed > 6) {
      clearInterval(timerInterval)
      alert('Час вичерпано, мабуть це не ваша гра :(.')

      return
    }

    document.getElementById('game-time').textContent = `0 : ${secondsElapsed}`
  }, 1000)
}

// Натискання на числа
function OnClickNumber(element) {
  if (!startTime) {
    startTimer()
  }

  element = parseInt(element, 10)

  if (element === finalArray[finalArray.length - 1] + 1) {
    finalArray.push(element)
    $(`#game-item${element}`).css('background-color', 'green')

    if (finalArray.length === 26) {
      const endTime = Date.now()
      const timeTaken = (endTime - startTime) / 1000
      clearInterval(timerInterval)
      alert(`Поздравляем! Вы завершили игру за ${timeTaken} секунд!`)
      window.location.href = 'index.html'
    }
  }
}

// Генерація поля
function generateGameBoard() {
  const numbers = new Set()
  $('#game-screen').empty()

  while (numbers.size < 25) {
    const randomNumber = Math.floor(Math.random() * 25) + 1
    if (!numbers.has(randomNumber)) {
      numbers.add(randomNumber)
      const randomStyle = styles[Math.floor(Math.random() * styles.length)]

      $('#game-screen').append(
        $(
          `<div class="game-item ${randomStyle}" id="game-item${randomNumber}" onClick="OnClickNumber(this.innerText)">${randomNumber}</div>`
        )
      )
    }
  }
}

$(document).ready(function () {
  $('#start-btn').button()
  $('#game-restart-btn').button()

  $('#start-btn').click(function () {
    window.location.href = 'game.html'
  })

  $('#game-restart-btn').click(function () {
    // Сброс результатів
    finalArray = [0]
    startTime = null
    clearInterval(timerInterval)
    $('#game-time').text('0 : 0')

    generateGameBoard() // Перероблення поля
  })

  generateGameBoard() // Початкова генерація
})
