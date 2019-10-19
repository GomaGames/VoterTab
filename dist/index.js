(() => {
  var wa = VoterTab.data.wa
  var ballotDescrition = document.getElementById('ballot-description')
  var ballotTitle = document.getElementById('ballot-title')
  var hamburger = document.getElementById('hamburger')
  var voteForButton = document.getElementById('vote-for-button')
  var voteAgainstButton = document.getElementById('vote-against-button')
  var image = document.getElementsByClassName('image')
  var readMore = document.getElementsByClassName('read-more')

  const getBallot = () => wa[2018][Math.floor(Math.random(wa[2018].length)*wa[2018].length)]

  const renderBallot = () => {
    let ballot = getBallot()
    ballotDescrition.innerHTML = ballot.description
    ballotTitle.innerHTML = `${ballot.number}: ${ballot.title}`
    voteForButton.innerHTML = ballot.vote.for
    voteAgainstButton.innerHTML = ballot.vote.against
    image[0].setAttribute('src', ballot.icon)
    ballot.readMore.map(item => {
      var readMoreItem = document.createElement("a")
      readMoreItem.setAttribute('href', item.href)
      readMoreItem.setAttribute('class', 'read-more-item')
      readMoreItem.innerHTML = item.title
      readMore[0].append(readMoreItem)
    })
  }

  renderBallot()

  hamburger.addEventListener('click', () => {
    window.location.href = '/list'
  })
})()
