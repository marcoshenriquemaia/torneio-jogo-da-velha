import Element from "../shared/element.js"

const PlayerCard = (player) => {
  const score = (player.win * 3) + (player.draw)

  const el_playerImage = Element({
    elementType: 'img',
    classes: ['player-card-image'],
    src: player?.photo
  })

  const el_winInfo = Element({
    elementType: 'span',
    classes: ['player-card-info'],
    text: `Vitórias: ${player.win}`
  })

  const el_loseInfo = Element({
    elementType: 'span',
    classes: ['player-card-info'],
    text: `Derrotas: ${player.lose}`
  })

  const el_drawInfo = Element({
    elementType: 'span',
    classes: ['player-card-info'],
    text: `Vitórias: ${player.draw}`
  })

  const el_matchesInfo = Element({
    elementType: 'span',
    classes: ['player-card-info'],
    text: `Partidas: ${player.games}`
  })

  const el_infoWrapper = Element({
    elementType: 'div',
    classes: ['player-card-center'],
    children: [el_winInfo, el_loseInfo, el_drawInfo, el_matchesInfo]
  })

  const el_score = Element({
    elementType: 'span',
    classes: ['player-card-score'],
    text: `${player?.name}`
  })

  const el_container = Element({
    elementType: 'li',
    classes: ['player-card'],
    children: [el_playerImage, el_score],
    dataValue: player.name
  }) 

  el_container.addEventListener('click', () => {
    el_container.classList.toggle('card-selected')
  })

  return el_container
}

export default PlayerCard