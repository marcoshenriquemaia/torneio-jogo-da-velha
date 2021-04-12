const marcosScript = (scenery, myMove) => {
  // script teste
  let moveIndex = null

  const move = () => {
    const randomNumber = Math.floor(Math.random() * 9)

    if (scenery[randomNumber]) return move()

    moveIndex = randomNumber
  }

  move()
  //script teste

  // your script here
  let moviment = null
  const shake = () => {
    function center() {
      moviment = 4

      if (scenery[0]) {
        moviment = 4;
      }
      if (scenery[1]) {
        moviment = 4;
      }
      if (scenery[2]) {
        moviment = 4;
      }
      if (scenery[3]) {
        moviment = 4;
      }
      if (scenery[5]) {
        moviment = 4;
      }
      if (scenery[6]) {
        moviment = 4;
      }
      if (scenery[7]) {
        moviment = 4;
      }
      if (scenery[8]) {
        moviment = 4;
      }
      if (scenery[4]) {
        moviment = 0;
      }
      if (scenery[4] && scenery[0]) {
        if (scenery[1]) {
          moviment = 7
          if (scenery[2]) {
            moviment = 6
          }
          if (scenery[3]) {
            moviment = 5
            if (scenery[6]) {
              moviment = 2
            } else if (scenery[2]) {
              moviment = 6
            }
          }
          if (scenery[5]) {
            moviment = 3
            if (scenery[2] || scenery[8]) {
              moviment = 6
            } else if (scenery[6]) {
              moviment = 2
            }
          }
          if (scenery[6]) {
            moviment = 2
          }
          if (scenery[8]) {
            moviment = 2
            if (scenery[5]) {
              moviment = 3
            } else if (scenery[3]) {
              moviment = 5
            }
          }
        }
        if (scenery[2]) {
          moviment = 6
        }
        if (scenery[3]) {
          moviment = 5
          if (scenery[2]) {
            moviment = 6
          }
          if (scenery[6]) {
            moviment = 2
          }
        }

        if (scenery[5]) {
          moviment = 3
          if (scenery[6]) {
            moviment = 2
          }
          if (scenery[2]) {
            moviment = 6
          }
          if (scenery[1]) {
            moviment = 7
          }
          if (scenery[7] || scenery[8]) {
            moviment = 6
          }
        }

        if (scenery[6]) {
          moviment = 2
        }

        if (scenery[7]) {
          moviment = 1

          if (scenery[2]) {
            moviment = 6
          }
          if (scenery[3] || scenery[5] || scenery[6] || scenery[8]) {
            moviment = 2
          }
        }

        if (scenery[8]) {
          moviment = 6
          if (scenery[3]) {
            moviment = 5
          }
          if (scenery[1]) {
            moviment = 7
          }
          if (scenery[1] || scenery[2] || scenery[5] || scenery[7]) {
            moviment = 3
          }
        }
      }
      if (scenery[0] && scenery[1] && scenery[2] && scenery[3] && scenery[4] && scenery[6] && scenery[7]) {
        moviment = 5
      }
      if (scenery[0] && scenery[1] && scenery[2] && scenery[3] && scenery[4] && scenery[5] && scenery[7]) {
        moviment = 6
      }
      if (scenery[0] && scenery[2] && scenery[4] && scenery[6]) {
        if (scenery[1] || scenery[5] || scenery[7] || scenery[8]) {
          moviment = 3
        }
        if (scenery[3]) {
          moviment = 5
        }
      }
      if (scenery[0] && scenery[1] && scenery[2] && scenery[4] && scenery[6] && scenery[7]) {
        if (scenery[3]) {
          moviment = 8
        }
      }
      if (scenery[0] && scenery[2] && scenery[3] && scenery[4] && scenery[5] && scenery[6]) {
        if (scenery[7] || scenery[8]) {
          moviment = 1
        }
      }
      if (scenery[0] && scenery[1] && scenery[3] && scenery[4] && scenery[5] && scenery[7]) {
        if (scenery[8]) {
          moviment = 6
        }
      }
      if (scenery[0] && scenery[2] && scenery[6] && scenery[7]) {
        moviment = 1
      }
      if (scenery[0] && scenery[1] && scenery[2] && scenery[4] && scenery[6]) {
        moviment = 7

        if (scenery[8]) {
          moviment = 3
        }
        if (scenery[3]) {
          moviment = 5
        }
      }
      if (scenery[2] && scenery[3] && scenery[4] && scenery[6] && scenery[8]) {
        moviment = 5
        if (scenery[1]) {
          moviment = 7
        }
        if (scenery[7]) {
          moviment = 1
        }
      }
      if (scenery[0] && scenery[3] && scenery[4] && scenery[5] && scenery[8]) {
        moviment = 2

        if (scenery[6]) {
          moviment = 1
        }
      }
      if (scenery[0] && scenery[1] && scenery[3] && scenery[4] && scenery[8]) {
        moviment = 6

        if (scenery[2]) {
          moviment = 5
        }
      }
      if (scenery[1] && scenery[2] && scenery[3] && scenery[4] && scenery[5] && scenery[6] && scenery[7] && scenery[8]) {
        moviment = 0
      }
      if (scenery[0] && scenery[2] && scenery[3] && scenery[4] && scenery[5] && scenery[6] && scenery[7] && scenery[8]) {
        moviment = 2
      }
      if (scenery[0] && scenery[1] && scenery[2] && scenery[4] && scenery[5] && scenery[6] && scenery[7] && scenery[8]) {
        moviment = 3
      }
      if (scenery[0] && scenery[1] && scenery[2] && scenery[3] && scenery[5] && scenery[6] && scenery[7] && scenery[8]) {
        moviment = 4
      }
      if (scenery[0] && scenery[1] && scenery[2] && scenery[3] && scenery[4] && scenery[6] && scenery[7] && scenery[8]) {
        moviment = 5
      }
      if (scenery[0] && scenery[1] && scenery[2] && scenery[3] && scenery[4] && scenery[5] && scenery[7] && scenery[8]) {
        moviment = 6
      }
      if (scenery[0] && scenery[1] && scenery[2] && scenery[3] && scenery[4] && scenery[5] && scenery[6] && scenery[8]) {
        moviment = 7
      }
      if (scenery[0] && scenery[1] && scenery[2] && scenery[3] && scenery[4] && scenery[5] && scenery[6] && scenery[7]) {
        moviment = 8
      }
    }
    
    center()
  }

  shake()

  return moviment
}


export default marcosScript