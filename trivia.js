
// Import readline so we can get user input
const readline = require("readline")

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Questions for the game
const questions = [
  {
    question: "Who is the all-time leading rusher for the Dallas Cowboys?",
    choices: ["Tony Dorsett", "Ezekiel Elliott", "Emmitt Smith", "Herschel Walker"],
    answer: 2
  },
  {
    question: "In what year were the Dallas Cowboys founded?",
    choices: ["1950", "1960", "1970", "1980"],
    answer: 1
  },
  {
    question: "Who was the Cowboys' head coach during their 1990s Super Bowl championships?",
    choices: ["Tom Landry", "Barry Switzer", "Jimmy Johnson", "Bill Parcells"],
    answer: 2
  },
  {
    question: "What is the name of the Cowboys' home stadium?",
    choices: ["Cowboys Stadium", "Texas Stadium", "AT&T Stadium", "The Star"],
    answer: 2
  },
  {
    question: "How many Super Bowl titles have the Dallas Cowboys won?",
    choices: ["3", "4", "5", "6"],
    answer: 2
  }
]

// Keep track of the score
let score = 0
let currentQuestion = 0

// Total time for the game in seconds
const totalTime = 60

// Start a countdown timer
let timeLeft = totalTime
const timer = setInterval(() => {
  timeLeft--
  if (timeLeft <= 0) {
    console.log("\nTime's up! Game over.")
    endGame()
  }
}, 1000)

// Function to ask a question
function askQuestion() {
  if (currentQuestion >= questions.length) {
    endGame()
    return
  }

  const q = questions[currentQuestion]
  console.log(`\nQuestion ${currentQuestion + 1}: ${q.question}`)

  // Display the choices
  for (let i = 0; i < q.choices.length; i++) {
    console.log(`${i + 1}) ${q.choices[i]}`)
  }

  // Ask the player for an answer
  rl.question("Your answer (1-4): ", (userInput) => {
    const userAnswer = parseInt(userInput) - 1

    // Check if the answer is correct
    if (userAnswer === q.answer) {
      console.log("Correct!")
      score++
    } else {
      console.log(`Incorrect. The correct answer was: ${q.choices[q.answer]}`)
    }

    currentQuestion++
    askQuestion() // Move to the next question
  })
}

// Function to end the game
function endGame() {
  clearInterval(timer) // Stop the timer
  console.log("\nGame Over!")
  console.log(`Your final score: ${score} out of ${questions.length}`)
  console.log(`Time remaining: ${timeLeft} seconds`)
  rl.close()
}

// Start the game
console.log("Welcome to the Dallas Cowboys Trivia Game!")
console.log(`You have ${totalTime} seconds to answer all questions.`)
askQuestion()
