var data = [
  {
    "id": 1,
    "description": "blah blah"
  },
  {
    "id": 2,
    "description": "blah blah 2"
  },
  {
    "id": 3,
    "description": "blah blah 3"
  },
  {
    "id": 4,
    "description": "blah blah 4"
  }
]

var ballotContainer = document.getElementById('ballot-container')

const getBallot = () => data[Math.floor(Math.random(data.length)*data.length)]

const renderBallot = () => {
  let ballot = getBallot()
  ballotContainer.innerHTML = ballot.description
}

renderBallot()