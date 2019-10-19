var wa = {
  2018: [
    {
      title: "Initiative Measure no. 1631 - Carbon Fee",
      description: "",
      readMore: [
        {
          title: "Don't call it a tax: Carbon fee heads to ballot",
          source: "Crosscut",
          href: "https://crosscut.com/2018/08/dont-call-it-tax-carbon-fee-heads-ballot"
        },
      ]
    }
  ]
};

var ballotDescrition = document.getElementById('ballot-description')
var ballotTitle = document.getElementById('ballot-title')

const getBallot = () => wa[2018][Math.floor(Math.random(wa[2018].length)*wa[2018].length)]

const renderBallot = () => {
  let ballot = getBallot()
  ballotDescrition.innerHTML = ballot.description
  ballotTitle.innerHTML = ballot.title
}

renderBallot()