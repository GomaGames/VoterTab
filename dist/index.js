(() => {
  var wa = VoterTab.data.wa
  var ballotDescrition = document.getElementById('ballot-description')
  var ballotTitle = document.getElementById('ballot-title')
  var hamburger = document.getElementById('hamburger')
  var voteForButton = document.getElementById('vote-for-button')
  var voteAgainstButton = document.getElementById('vote-against-button')

  const getBallot = () => wa[2018][Math.floor(Math.random(wa[2018].length)*wa[2018].length)]

  const renderBallot = () => {
    let ballot = getBallot()
    ballotDescrition.innerHTML = ballot.description
    ballotTitle.innerHTML = ballot.title
    voteForButton.innerHTML = ballot.vote.for
    voteAgainstButton.innerHTML = ballot.vote.against
  }

  renderBallot()

  hamburger.addEventListener('click', () => {
    window.location.href = '/list'
  })
})()
