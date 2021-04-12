const BotScript = (scenery, myMove) => {
  // script teste
  let moveIndex = null
  let começa = false
  const move = () => {
    const pontas = [scenery[0], scenery[2], scenery[6], scenery[8]]
    let camposVazios = 0
    for (const campo of scenery) {
      if (campo == '') {
        camposVazios = camposVazios + 1;
      }
      if (camposVazios == 9) {
        começa = true
        return moveIndex = 4
      }
      if (camposVazios == 8 && scenery[4] != '') {
        começa = false
        return moveIndex = 0
      }
      if (camposVazios == 8 && scenery[4] == '') {
        começa = false
        return moveIndex = 4
      }
      if (camposVazios == 7 && scenery[0] == '' && scenery[2] == '' && scenery[6] == '' && scenery[8] == '' && scenery[4] != '') {
        return moveIndex = 0
      }
      if (camposVazios == 7 && scenery[1] == '' && scenery[3] == '' && scenery[5] == '' && scenery[7] == '' && scenery[4] != '') {
        return moveIndex = 1
      }
      if (camposVazios == 6 && scenery[0] == scenery[1] && scenery[0] != '' && scenery[2] == '') {
        return moveIndex = 2
      }
      if (camposVazios == 6 && scenery[0] == scenery[3] && scenery[0] != '' && scenery[6] == '') {
        return moveIndex = 6
      }
      if (camposVazios == 6 && scenery[0] == scenery[4] && scenery[0] != '' && scenery[8] == '') {
        return moveIndex = 8
      }
      if (camposVazios == 6 && scenery[0] == scenery[2] && scenery[0] != '' && scenery[1] == '') {
        return moveIndex = 1
      }
      if (camposVazios == 6 && scenery[0] == scenery[6] && scenery[0] != '' && scenery[3] == '') {
        return moveIndex = 3
      }
      if (camposVazios == 6 && scenery[0] == scenery[8] && scenery[0] != '' && scenery[4] == '') {
        return moveIndex = 4
      }
      if (camposVazios == 6 && scenery[1] == scenery[2] && scenery[1] != '' && scenery[0] == '') {
        return moveIndex = 0
      }
      if (camposVazios == 6 && scenery[1] == scenery[4] && scenery[1] != '' && scenery[7] == '') {
        return moveIndex = 7
      }
      if (camposVazios == 6 && scenery[1] == scenery[7] && scenery[1] != '' && scenery[4] == '') {
        return moveIndex = 4
      }
      if (camposVazios == 6 && scenery[2] == scenery[4] && scenery[2] != '' && scenery[6] == '') {
        return moveIndex = 6
      }
      if (camposVazios == 6 && scenery[2] == scenery[5] && scenery[2] != '' && scenery[8] == '') {
        return moveIndex = 8
      }
      if (camposVazios == 6 && scenery[2] == scenery[8] && scenery[2] != '' && scenery[5] == '') {
        return moveIndex = 5
      }
      if (camposVazios == 6 && scenery[2] == scenery[6] && scenery[2] != '' && scenery[4] == '') {
        return moveIndex = 4
      }
      if (camposVazios == 6 && scenery[3] == scenery[6] && scenery[3] != '' && scenery[0] == '') {
        return moveIndex = 0
      }
      if (camposVazios == 6 && scenery[3] == scenery[4] && scenery[3] != '' && scenery[5] == '') {
        return moveIndex = 5
      }
      if (camposVazios == 6 && scenery[3] == scenery[5] && scenery[3] != '' && scenery[4] == '') {
        return moveIndex = 4
      }
      if (camposVazios == 6 && scenery[5] == scenery[8] && scenery[5] != '' && scenery[2] == '') {
        return moveIndex = 2
      }
      if (camposVazios == 6 && scenery[5] == scenery[4] && scenery[5] != '' && scenery[3] == '') {
        return moveIndex = 3
      }
      if (camposVazios == 6 && scenery[5] == scenery[3] && scenery[5] != '' && scenery[4] == '') {
        return moveIndex = 4
      }
      if (camposVazios == 6 && scenery[6] == scenery[7] && scenery[6] != '' && scenery[8] == '') {
        return moveIndex = 8
      }
      if (camposVazios == 6 && scenery[6] == scenery[4] && scenery[6] != '' && scenery[2] == '') {
        return moveIndex = 2
      }
      if (camposVazios == 6 && scenery[6] == scenery[8] && scenery[6] != '' && scenery[7] == '') {
        return moveIndex = 7
      }
      if (camposVazios == 6 && scenery[7] == scenery[8] && scenery[7] != '' && scenery[6] == '') {
        return moveIndex = 6
      }
      if (camposVazios == 6 && scenery[7] == scenery[4] && scenery[7] != '' && scenery[1] == '') {
        return moveIndex = 1
      }
      if (camposVazios == 6 && scenery[8] == scenery[4] && scenery[8] != '' && scenery[0] == '') {
        return moveIndex = 0
      }
      if (camposVazios == 4 && scenery[0] == scenery[1] && scenery[0] != '' && scenery[2] == '') {
        return moveIndex = 2
      }
      if (camposVazios == 4 && scenery[0] == scenery[3] && scenery[0] != '' && scenery[6] == '') {
        return moveIndex = 6
      }
      if (camposVazios == 4 && scenery[0] == scenery[4] && scenery[0] != '' && scenery[8] == '') {
        return moveIndex = 8
      }
      if (camposVazios == 4 && scenery[0] == scenery[2] && scenery[0] != '' && scenery[1] == '') {
        return moveIndex = 1
      }
      if (camposVazios == 4 && scenery[0] == scenery[6] && scenery[0] != '' && scenery[3] == '') {
        return moveIndex = 3
      }
      if (camposVazios == 4 && scenery[0] == scenery[8] && scenery[0] != '' && scenery[4] == '') {
        return moveIndex = 4
      }
      if (camposVazios == 4 && scenery[1] == scenery[2] && scenery[1] != '' && scenery[0] == '') {
        return moveIndex = 0
      }
      if (camposVazios == 4 && scenery[1] == scenery[4] && scenery[1] != '' && scenery[7] == '') {
        return moveIndex = 7
      }
      if (camposVazios == 4 && scenery[1] == scenery[7] && scenery[1] != '' && scenery[4] == '') {
        return moveIndex = 4
      }
      if (camposVazios == 4 && scenery[2] == scenery[4] && scenery[2] != '' && scenery[6] == '') {
        return moveIndex = 6
      }
      if (camposVazios == 4 && scenery[2] == scenery[5] && scenery[2] != '' && scenery[8] == '') {
        return moveIndex = 8
      }
      if (camposVazios == 4 && scenery[2] == scenery[8] && scenery[2] != '' && scenery[5] == '') {
        return moveIndex = 5
      }
      if (camposVazios == 4 && scenery[2] == scenery[6] && scenery[2] != '' && scenery[4] == '') {
        return moveIndex = 4
      }
      if (camposVazios == 4 && scenery[3] == scenery[6] && scenery[3] != '' && scenery[0] == '') {
        return moveIndex = 0
      }
      if (camposVazios == 4 && scenery[3] == scenery[4] && scenery[3] != '' && scenery[5] == '') {
        return moveIndex = 5
      }
      if (camposVazios == 4 && scenery[3] == scenery[5] && scenery[3] != '' && scenery[4] == '') {
        return moveIndex = 4
      }
      if (camposVazios == 4 && scenery[5] == scenery[8] && scenery[5] != '' && scenery[2] == '') {
        return moveIndex = 2
      }
      if (camposVazios == 4 && scenery[5] == scenery[4] && scenery[5] != '' && scenery[3] == '') {
        return moveIndex = 3
      }
      if (camposVazios == 4 && scenery[5] == scenery[3] && scenery[5] != '' && scenery[4] == '') {
        return moveIndex = 4
      }
      if (camposVazios == 4 && scenery[6] == scenery[7] && scenery[6] != '' && scenery[8] == '') {
        return moveIndex = 8
      }
      if (camposVazios == 4 && scenery[6] == scenery[4] && scenery[6] != '' && scenery[2] == '') {
        return moveIndex = 2
      }
      if (camposVazios == 4 && scenery[6] == scenery[8] && scenery[6] != '' && scenery[7] == '') {
        return moveIndex = 7
      }
      if (camposVazios == 4 && scenery[7] == scenery[8] && scenery[7] != '' && scenery[6] == '') {
        return moveIndex = 6
      }
      if (camposVazios == 4 && scenery[7] == scenery[4] && scenery[7] != '' && scenery[1] == '') {
        return moveIndex = 1
      }
      if (camposVazios == 4 && scenery[8] == scenery[4] && scenery[8] != '' && scenery[0] == '') {
        return moveIndex = 0
      }
      if (camposVazios == 2 && scenery[0] == scenery[1] && scenery[0] != '' && scenery[2] == '') {
        return moveIndex = 2
      }
      if (camposVazios == 2 && scenery[0] == scenery[3] && scenery[0] != '' && scenery[6] == '') {
        return moveIndex = 6
      }
      if (camposVazios == 2 && scenery[0] == scenery[4] && scenery[0] != '' && scenery[8] == '') {
        return moveIndex = 8
      }
      if (camposVazios == 2 && scenery[0] == scenery[2] && scenery[0] != '' && scenery[1] == '') {
        return moveIndex = 1
      }
      if (camposVazios == 2 && scenery[0] == scenery[6] && scenery[0] != '' && scenery[3] == '') {
        return moveIndex = 3
      }
      if (camposVazios == 2 && scenery[0] == scenery[8] && scenery[0] != '' && scenery[4] == '') {
        return moveIndex = 4
      }
      if (camposVazios == 2 && scenery[1] == scenery[2] && scenery[1] != '' && scenery[0] == '') {
        return moveIndex = 0
      }
      if (camposVazios == 2 && scenery[1] == scenery[4] && scenery[1] != '' && scenery[7] == '') {
        return moveIndex = 7
      }
      if (camposVazios == 2 && scenery[1] == scenery[7] && scenery[1] != '' && scenery[4] == '') {
        return moveIndex = 4
      }
      if (camposVazios == 2 && scenery[2] == scenery[4] && scenery[2] != '' && scenery[6] == '') {
        return moveIndex = 6
      }
      if (camposVazios == 2 && scenery[2] == scenery[5] && scenery[2] != '' && scenery[8] == '') {
        return moveIndex = 8
      }
      if (camposVazios == 2 && scenery[2] == scenery[8] && scenery[2] != '' && scenery[5] == '') {
        return moveIndex = 5
      }
      if (camposVazios == 2 && scenery[2] == scenery[6] && scenery[2] != '' && scenery[4] == '') {
        return moveIndex = 4
      }
      if (camposVazios == 2 && scenery[3] == scenery[6] && scenery[3] != '' && scenery[0] == '') {
        return moveIndex = 0
      }
      if (camposVazios == 2 && scenery[3] == scenery[4] && scenery[3] != '' && scenery[5] == '') {
        return moveIndex = 5
      }
      if (camposVazios == 2 && scenery[3] == scenery[5] && scenery[3] != '' && scenery[4] == '') {
        return moveIndex = 4
      }
      if (camposVazios == 2 && scenery[5] == scenery[8] && scenery[5] != '' && scenery[2] == '') {
        return moveIndex = 2
      }
      if (camposVazios == 2 && scenery[5] == scenery[4] && scenery[5] != '' && scenery[3] == '') {
        return moveIndex = 3
      }
      if (camposVazios == 2 && scenery[5] == scenery[3] && scenery[5] != '' && scenery[4] == '') {
        return moveIndex = 4
      }
      if (camposVazios == 2 && scenery[6] == scenery[7] && scenery[6] != '' && scenery[8] == '') {
        return moveIndex = 8
      }
      if (camposVazios == 2 && scenery[6] == scenery[4] && scenery[6] != '' && scenery[2] == '') {
        return moveIndex = 2
      }
      if (camposVazios == 2 && scenery[6] == scenery[8] && scenery[6] != '' && scenery[7] == '') {
        return moveIndex = 7
      }
      if (camposVazios == 2 && scenery[7] == scenery[8] && scenery[7] != '' && scenery[6] == '') {
        return moveIndex = 6
      }
      if (camposVazios == 2 && scenery[7] == scenery[4] && scenery[7] != '' && scenery[1] == '') {
        return moveIndex = 1
      }
      if (camposVazios == 2 && scenery[8] == scenery[4] && scenery[8] != '' && scenery[0] == '') {
        return moveIndex = 0
      }
      if (camposVazios == 5 && scenery[1] == scenery[4] && scenery [1] != '' && scenery[7] == ''){
        return moveIndex =7
      }
      if (camposVazios == 5 && scenery[1] == scenery[4] && scenery [1] != '' && scenery[7] != ''){
        return moveIndex = 6
      }
      if (camposVazios == 5 && scenery[0] == scenery[4] && scenery [0] != '' && scenery[8] == ''){
        return moveIndex = 8
      }
      if (camposVazios == 5 && scenery[1] != scenery[4] && scenery[1] != '' && scenery[4] != '' && scenery[6] == ''){
        return moveIndex = 6
      }
      if (camposVazios == 5 && scenery[3] != scenery[4]  && scenery[3] != '' && scenery[4] != '' && scenery[2] == ''){
        return moveIndex = 2
      }
      if (camposVazios == 5 && scenery[5] != scenery[4]  && scenery[5] != '' && scenery[4] != '' && scenery[2] == ''){
        return moveIndex = 2
      }
      if (camposVazios == 5 && scenery[7] != scenery[4]  && scenery[7] != '' && scenery[4] != '' && scenery[6] == ''){
        return moveIndex = 6
      }
      if(camposVazios == 3 && scenery [0] == scenery [6] && scenery [0] != '' && scenery [3] == ''){
        return moveIndex = 3
      }
      if(camposVazios == 3 && scenery [0] == scenery [2] && scenery [0] != '' && scenery [1] == ''){
        return moveIndex = 1
      }
      if(camposVazios == 3 && scenery [6] == scenery [4] && scenery [6] != '' && scenery [3] == ''){
        return moveIndex = 3
      }
      if(camposVazios == 1 && scenery [0] == '' && scenery[1] != '' && scenery[2] != '' && scenery[3] != '' && scenery[4] != '' && scenery[5] !='' && scenery[6] != '' && scenery[7] != '' && scenery[8] != ''){
        return moveIndex = 0
      }
      if(camposVazios == 1 && scenery [1] == '' && scenery[0] != '' && scenery[2] != '' && scenery[3] != '' && scenery[4] != '' && scenery[5] !='' && scenery[6] != '' && scenery[7] != '' && scenery[8] != ''){
        return moveIndex = 1
      }
      if(camposVazios == 1 && scenery [2] == '' && scenery[1] != '' && scenery[0] != '' && scenery[3] != '' && scenery[4] != '' && scenery[5] !='' && scenery[6] != '' && scenery[7] != '' && scenery[8] != ''){
        return moveIndex = 2
      }
      if(camposVazios == 1 && scenery [3] == '' && scenery[1] != '' && scenery[2] != '' && scenery[0] != '' && scenery[4] != '' && scenery[5] !='' && scenery[6] != '' && scenery[7] != '' && scenery[8] != ''){
        return moveIndex = 3
      }
      if(camposVazios == 1 && scenery [4] == '' && scenery[1] != '' && scenery[2] != '' && scenery[3] != '' && scenery[0] != '' && scenery[5] !='' && scenery[6] != '' && scenery[7] != '' && scenery[8] != ''){
        return moveIndex = 4
      }
      if(camposVazios == 1 && scenery [5] == ''  && scenery[1] != '' && scenery[2] != '' && scenery[3] != '' && scenery[4] != '' && scenery[0] !='' && scenery[6] != '' && scenery[7] != '' && scenery[8] != ''){
        return moveIndex = 5
      }
      if(camposVazios == 1 && scenery [6] == '' && scenery[1] != '' && scenery[2] != '' && scenery[3] != '' && scenery[4] != '' && scenery[5] !='' && scenery[0] != '' && scenery[7] != '' && scenery[8] != ''){
        return moveIndex = 6
      }
      if(camposVazios == 1 && scenery [7] == '' && scenery[1] != '' && scenery[2] != '' && scenery[3] != '' && scenery[4] != '' && scenery[5] !='' && scenery[6] != '' && scenery[0] != '' && scenery[8] != ''){
        return moveIndex = 7
      }
      if(camposVazios == 1 && scenery [8] == ''  && scenery[1] != '' && scenery[2] != '' && scenery[3] != '' && scenery[4] != '' && scenery[5] !='' && scenery[6] != '' && scenery[7] != '' && scenery[0] != ''){
        return moveIndex = 8
      }
    }
    if(moveIndex != Number){
      const randomNumber = Math.floor(Math.random() * 9)
    
      if (scenery[randomNumber]) return move()
  
      moveIndex = randomNumber
    }
  }

  move()
  //script teste

  // your script here

  return moveIndex
}

export default BotScript