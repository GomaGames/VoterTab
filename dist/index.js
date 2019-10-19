(() => {
  var wa = VoterTab.data.wa
  var ballotDescrition = document.getElementById('ballot-description')
  var ballotTitle = document.getElementById('ballot-title')

  const getBallot = () => wa[2018][Math.floor(Math.random(wa[2018].length)*wa[2018].length)]

  const renderBallot = () => {
    let ballot = getBallot()
    ballotDescrition.innerHTML = ballot.description
    ballotTitle.innerHTML = ballot.title
  }

  renderBallot()
})()
