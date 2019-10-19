(() => {
  var wa = VoterTab.data.wa
  var ballotDescrition = document.getElementById('ballot-description')
  var ballotTitle = document.getElementById('ballot-title')
  var hamburger = document.getElementById('hamburger')
  var voteForButton = document.getElementById('vote-for-button')
  var voteAgainstButton = document.getElementById('vote-against-button')
  var image = document.getElementsByClassName('ballot-icon')
  var readMore = document.getElementsByClassName('read-more')
  var voteResults = document.getElementsByClassName('vote-results')
  var endorsements = document.getElementsByClassName('endorsements')
  var ballotInstructions = document.getElementsByClassName('ballot-instructions')
  var ballotSubtitle = document.getElementById('ballot-subtitle')
  var voteDescriptionFor = document.getElementById('vote-description-for')
  var voteDescriptionAgaisnt = document.getElementById('vote-description-against')
  var callToAction = document.getElementsByClassName('call-to-action')
  var readMoreBlock = document.getElementsByClassName('read-more-block')

  const getBallot = () => wa[2018][Math.floor(Math.random(wa[2018].length)*wa[2018].length)]

  const renderBallot = () => {
    let ballot = getBallot()
    ballotDescrition.innerHTML = ballot.description
    ballotTitle.innerHTML = ballot.title
    voteForButton.innerHTML = ballot.vote.for
    voteAgainstButton.innerHTML = ballot.vote.against
    ballotSubtitle.innerHTML = ballot.number
    voteDescriptionFor.innerHTML = ballot.vote.for
    voteDescriptionAgaisnt.innerHTML = ballot.vote.against
    image[0].setAttribute('src', ballot.icon)
    ballot.readMore.map(item => {
      var readMoreItem = document.createElement("a")
      readMoreItem.setAttribute('href', item.href)
      readMoreItem.setAttribute('class', 'read-more-item')
      readMoreItem.innerHTML = item.title
      readMore[0].append(readMoreItem)
    })
    ballot.endorsements.map(item => {
      var endorsementItem = document.createElement("a")
      endorsementItem.setAttribute('href', item.href)
      endorsementItem.setAttribute('class', 'endorsement-item')
      endorsementItem.innerHTML = `${item.source}: ${item.endorsement}`
      endorsements[0].append(endorsementItem)
    })
  }

  renderBallot()

  // hamburger.addEventListener('click', () => {
  //   window.location.href = '/list'
  // })

  const vote = (vote) => {
    voteResults[0].className = 'vote-results'
    ballotInstructions[0].className = 'ballot-instructions'
    callToAction[0].className = 'call-to-action'
    readMoreBlock[0].className = 'read-more-block'
    if(vote === 'for') {
      voteForButton.className = 'vote selected'
      voteAgainstButton.className = 'vote'
    } else {
      voteForButton.className = 'vote'
      voteAgainstButton.className = 'vote selected'
    }
  }
  voteForButton.addEventListener('click', () => vote('for'))
  voteAgainstButton.addEventListener('click', vote)
})()
