const container = document.querySelector('.container')
const ratingButtons = document.querySelectorAll('.rating-points-btn')
const submitButton = document.querySelector('.rating-submit')
const resultRating = document.querySelector('.result-rating span')
const main = document.querySelector('main')

let ratingPoint = 0

ratingButtons.forEach((ratingButton) => {
  ratingButton.addEventListener('click', () => {
    // remove all .selected class
    ratingButtons.forEach((ratingButton) => ratingButton.classList.remove('selected'))
    // add .selected class
    ratingButton.classList.add('selected')
    // set rating point value
    ratingPoint = ratingButton.textContent
  })
})

submitButton.addEventListener('click', () => {
  // if rating point is not selected, return
  if (ratingPoint == 0) {
    main.classList.add('mupeng')
    return
  }
  // else, go to result page
  container.style.transform = 'translateX(-100%)'
  resultRating.innerHTML = ratingPoint
  main.classList.remove('mupeng')
})
