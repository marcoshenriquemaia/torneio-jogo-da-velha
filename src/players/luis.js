const luisScript = (scenery, myMove) => {

  if (scenery.includes('X') || scenery.includes('O')) {

    const dispo = scenery.reduce((acc, item, index) => {
      if (item == '') {
        return acc = [...acc, index]
      }
      return acc
    }, [])

    const my = scenery.reduce((acc, item, index) => {
      if (item == myMove) {
        return acc = [...acc, index]
      }
      return acc
    }, [])

    const adv = scenery.reduce((acc, item, index) => {
      if (item != myMove && item != '') {
        return acc = [...acc, index]
      }
      return acc
    }, [])

    if (dispo.includes(0)) {
      if (
        my.includes(3) && my.includes(6) ||
        my.includes(4) && my.includes(8) ||
        my.includes(1) && my.includes(2)
      ) {
        return 0
      }
    }
    if (dispo.includes(1)) {
      if (
        my.includes(0) && my.includes(2) ||
        my.includes(7) && my.includes(4)
      ) {
        return 1
      }
    }

    if (dispo.includes(3)) {
      if (
        my.includes(0) && my.includes(6) ||
        my.includes(4) && my.includes(5)
      ) {
        return 3
      }
    }
    if (dispo.includes(4)) {
      if (
        my.includes(0) && my.includes(8) ||
        my.includes(2) && my.includes(6) ||
        my.includes(3) && my.includes(5)
      ) {
        return 4
      }
    }
    if (dispo.includes(5)) {
      if (
        my.includes(2) && my.includes(8) ||
        my.includes(3) && my.includes(4)
      ) {
        return 5
      }
    }
    if (dispo.includes(6)) {
      if (
        my.includes(2) && my.includes(4) ||
        my.includes(0) && my.includes(3) ||
        my.includes(7) && my.includes(8)
      ) {
        return 6
      }
    }
    if (dispo.includes(7)) {
      if (
        my.includes(1) && my.includes(4) ||
        my.includes(6) && my.includes(8)
      ) {
        return 7
      }
    }
    if (dispo.includes(8)) {
      if (
        my.includes(0) && my.includes(4) ||
        my.includes(6) && my.includes(7) ||
        my.includes(2) && my.includes(5)
      ) {
        return 8
      }
    }


    if (dispo.includes(0)) {
      if (
        adv.includes(6) && adv.includes(3) ||
        adv.includes(2) && adv.includes(1)
      ) {
        return 0
      }
    }
    if (dispo.includes(1)) {
      if (
        adv.includes(0) && adv.includes(2) ||
        adv.includes(7) && adv.includes(4)
      ) {
        return 1
      }
    }
    if (dispo.includes(2)) {
      if (
        adv.includes(0) && adv.includes(1) ||
        adv.includes(8) && adv.includes(5) ||
        adv.includes(6) && adv.includes(4)
      ) {
        return 2
      }
    }
    if (dispo.includes(3)) {
      if (
        adv.includes(0) && adv.includes(6) ||
        adv.includes(4) && adv.includes(5)
      ) {
        return 3
      }
    }

    if (dispo.includes(4)) {
      if (
        adv.includes(2) && (adv.includes(6) || adv.includes(5) || adv.includes(1)) ||
        adv.includes(0) && (adv.includes(8) || adv.includes(1) || adv.includes(3)) ||
        adv.includes(3) && (adv.includes(5) || adv.includes(1) || adv.includes(7) || adv.includes(6) || adv.includes(2) || adv.includes(8)) ||
        adv.includes(1) && (adv.includes(7) || adv.includes(5) || adv.includes(8) || adv.includes(6)) ||
        adv.includes(5) && (adv.includes(7) || adv.includes(8)) ||
        adv.includes(6) && adv.includes(7) ||
        adv.includes(7) && (adv.includes(8) || adv.includes(0) || adv.includes(2))
      ) {
        return 4
      }
    }
    if (dispo.includes(5)) {
      if (
        adv.includes(3) && adv.includes(4) ||
        adv.includes(2) && adv.includes(8)
      ) {
        return 5
      }
    }
    if (dispo.includes(6)) {
      if (
        adv.includes(0) && adv.includes(3) ||
        adv.includes(2) && adv.includes(4) ||
        adv.includes(8) && adv.includes(7)
      ) {
        return 6
      }
    }
    if (dispo.includes(7)) {
      if (
        adv.includes(6) && adv.includes(8) ||
        adv.includes(1) && adv.includes(4)

      ) {
        return 7
      }
    }
    if (dispo.includes(8)) {
      if (
        adv.includes(0) && adv.includes(4) ||
        adv.includes(2) && adv.includes(5) ||
        adv.includes(6) && adv.includes(7)
      ) {
        return 8
      }
    }

    if (dispo.length == 8 && (adv.includes(0) || adv.includes(2) || adv.includes(6) || adv.includes(8))) {
      return 4
    }


    if (
      my.includes(4) && dispo.includes(1) && dispo.includes(7)
    ) {
      return 1
    }
    if (
      my.includes(0) && dispo.includes(2) && dispo.includes(1) && dispo.includes(6)
    ) {
      return 2
    }
    if (my.includes(4) && dispo.includes(3) && dispo.includes(5)) {
      return 3
    }
    if (dispo.includes(4)) {
      if (
        adv.includes(1) && dispo.includes(5) && dispo.includes(3) ||
        my.includes(0) && my.includes(3) && (dispo.includes(8) || dispo.includes(7))
      ) {
        return 4
      }
    }

    if (dispo.includes(5)) {
      if (
        my.includes(4) && dispo.includes(3) ||
        my.includes(8) && my.includes(4) && dispo.includes(1) && dispo.includes(2)
      ) {
        return 5
      }
    }

    if (dispo.includes(6)) {
      if (
        my.includes(0) && dispo.includes(3) && dispo.includes(8) ||
        my.includes(0) && my.includes(8)
      ) {
        return 6
      }
    }

    if (
      my.includes(4) && dispo.includes(7) && dispo.includes(1)
    ) {
      return 7
    }
    if (dispo.includes(8)) {
      if (
        my.includes(0) && dispo.includes(3) ||
        my.includes(0) && dispo.includes(2) ||
        my.includes(0) && dispo.includes(4) && dispo.includes(6) && dispo.includes(3) && dispo.includes(7)
      ) {
        return 8
      }
    }

    if (dispo.includes(4)) {
      return 4
    }

    return dispo[0]
  }

  const firstPlay = () => {
    const result = Math.floor(Math.random() * 4);

    return (result == 0 || result == 3) ? result : firstPlay()
  }

  return firstPlay()
}

export default luisScript