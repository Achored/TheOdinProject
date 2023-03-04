let cannot = "what are you doing";
let user = {
    name: "John",
    age: 31
};

// -------------- Storing Objects 

// example one
const playerOneName = "tim"
const playerTwoName = "jenn"
const playerOneMarker = "X"
const playerTwoMarker = "O"

// example two
const playerOne = {
  name: "tim",
  marker: "X"
}

const playerTwo = {
  name: "jenn",
  marker: "O"
}
function printName(player) {
  console.log(player.name)
}

console.log(playerOneName + " marker is "+ playerOneMarker)
console.log(playerTwoName + " marker is "+ playerTwoMarker)

// ---------------- Object Constructors
function Player(name, marker) {
    this.name = name
    this.marker = marker
   this.sayName = function() {
      console.log(name)
     }
   }

const player = new Player('steve', 'X')
console.log(player.name) // 'steve'

  const player1 = new Player('steve', 'X')
  const player2 = new Player('also steve', 'O')
  player1.sayName() // logs 'steve'
  player2.sayName() // logs 'also steve'

  // -- Exercise //
  function book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = function() {
    return (title + ' by ' + author + ', ' + pages + ' pages, ' + status) }
  }
  const theHobbit = new book('The Hobbit',  'J.R.R Tolkien', '295', 'not read')
  console.log(theHobbit.info())

  const totalAntipodal = new book ('Total Antipodal', 'Achored', '1008', 'wrote')

// ---------------- Prototype // Prototype Inheritance

function Student() {
}

Student.prototype.sayName = function() {
  console.log(this.name)
  this.section = "Diamond"
}

function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("carl")
carl.sayName() // console.logs "carl"
console.log(carl.grade) // 8
console.log(carl.section)