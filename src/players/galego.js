//leia o README

const marcosScript = (scenery, myMove) => {
  let moveIndex = null
  const move = () => {
    const randomNumber = Math.floor(Math.random() * 9)
    
    console.log(randomNumber)
    if (scenery[randomNumber]) return move()

    moveIndex = randomNumber
  }

  move()
  // your script here

  return moveIndex
}


export default marcosScript