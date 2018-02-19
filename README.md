# wdi-fundamentals-memorygame


if (localStorage) {
  console.log('LocalStorage is supported!')
} else {
  console.log('No support. Use a fallback such as browser cookies or store on the server.')
}

let score = 0
localStorage.setItem('user', score)
score ++
localStorage.setItem('user', score)
console.log(localStorage.getItem('user'))
