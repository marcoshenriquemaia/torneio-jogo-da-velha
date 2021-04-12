const marcosScript = (scenery, myMove) => {

  const winningCombinations = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [1, 4, 7],
    [6, 4, 2],
    [6, 7, 8],
    [2, 5, 8],
  ]

  function ondeOAdversarioJogou(scenery, mymove) {
    const jogadasAdversario = []
    scenery.map((square, index) => {
      if (square != "" & square != mymove) return jogadasAdversario.push(index)
    })
    return jogadasAdversario
  }

  function ondeEuJoguei(scenery, mymove) {
    const ondeJaJoguei = []
    scenery.map((square, index) => {
      if (square === mymove) return ondeJaJoguei.push(index)
    })
    return ondeJaJoguei
  }

  function minhajogada() {
    const jogadasAdversario = ondeOAdversarioJogou(scenery, myMove)
    const minhasJogadas = ondeEuJoguei(scenery, myMove)

    const camposJogados = [...jogadasAdversario, ...minhasJogadas]

    if (jogadasAdversario.length === 1 || jogadasAdversario.length === 0) {
      if(jogadasAdversario.length === 0) {
        const jogaAqui = [4, 1]

        return escolherMelhorOpcao(jogaAqui, true, camposJogados)
      }
      let posicoes = []
      winningCombinations.map(combinacao => {
        combinacao.filter(numero => numero != jogadasAdversario && posicoes.push(numero))
      })

      posicoes = posicoes.sort((a, b) => { return a - b })

      let posicaoErepeticao = []
      let repeticao = 1
      for (let i = 0; posicoes.length > i; i++) {
        if (posicoes[i] === posicoes[i + 1]) {
          repeticao = repeticao + 1
        } else {
          let joga = [posicoes[i], repeticao]
          posicaoErepeticao.push(joga)

          repeticao = 1
        }
      }
      return escolherMelhorOpcao(posicaoErepeticao,false, camposJogados)
    } else {
      let proximoDaVitoria = []
      winningCombinations.map((elemento) => {
        for (let i = 0; jogadasAdversario.length > i; i++) {
          if (String(elemento).match(jogadasAdversario[i])) {
            for (let j = 0; jogadasAdversario.length > j; j++) {
              if (jogadasAdversario[i] !== jogadasAdversario[j]) {
                if (String(elemento).match(jogadasAdversario[j])) {
                  proximoDaVitoria.push(elemento)
                }
              }
            }
          }
        }
      })

      proximoDaVitoria = proximoDaVitoria.filter(function (elem, pos, arr) {
        return arr.indexOf(elem) == pos;
      });

      const proximoDaVitoriaNumeros = []
      proximoDaVitoria.map(combinacao => combinacao.map(numero => proximoDaVitoriaNumeros.push(numero)))

      let difference = proximoDaVitoriaNumeros.filter(x => !camposJogados.includes(x));


      let estouProximoDaVitoria = []
      let ganhaJogandoAqui = []
      if (minhasJogadas) {
        winningCombinations.map((elemento) => {
          for (let i = 0; minhasJogadas.length > i; i++) {
            if (String(elemento).match(minhasJogadas[i])) {
              for (let j = 0; minhasJogadas.length > j; j++) {
                if (minhasJogadas[i] !== minhasJogadas[j]) {
                  if (String(elemento).match(minhasJogadas[j])) {
                    estouProximoDaVitoria.push(elemento)
                  }
                }
              }
            }
          }
        })

        const estouProximoDaVitoriaNumeros = []
        estouProximoDaVitoria.map(combinacao => combinacao.map(numero => estouProximoDaVitoriaNumeros.push(numero)))

        estouProximoDaVitoria = estouProximoDaVitoria.filter(function (elem, pos, arr) {
          return arr.indexOf(elem) == pos;
        });
        ganhaJogandoAqui = estouProximoDaVitoriaNumeros.filter(x => !camposJogados.includes(x));
      }


      if (ganhaJogandoAqui.length > 0) {
        const jogaAqui = [ganhaJogandoAqui[0], 1]
        console.log('ganhei aqui', jogaAqui)

        return escolherMelhorOpcao(jogaAqui, true, camposJogados)
      } else if (difference.length > 0) {
        const jogaAqui = [difference[0], 1]

        return escolherMelhorOpcao(jogaAqui, true, camposJogados)
      } else {
        return ondeEuJaJogueiEproximaJogada(minhasJogadas, camposJogados, jogadasAdversario)
      }
      // o erro ta acontecendo pq difference não existe, faz um else aqui
    }
  }

  function escolherMelhorOpcao(ondeOAdversarioNaoJogou, proximoDaVitoria = false, camposJogados) {
    if (proximoDaVitoria) {
      return Number(ondeOAdversarioNaoJogou[0])
    } else {
      let maior = 0
      let melhoresOpcoesFiltradas = []
      for (let i = 0; ondeOAdversarioNaoJogou.length > i; i++) {
        if (ondeOAdversarioNaoJogou[i][1] >= maior) {
          maior = ondeOAdversarioNaoJogou[i][1]
          melhoresOpcoesFiltradas.push(ondeOAdversarioNaoJogou[i]);
        }
      }

      let melhoresOpcoesOrdenadasMaiorProMenor = []
      melhoresOpcoesFiltradas.map(combinacao => {
        melhoresOpcoesOrdenadasMaiorProMenor.push(combinacao
          .filter(numero => !camposJogados.includes(numero)))
      })
      

      melhoresOpcoesOrdenadasMaiorProMenor = melhoresOpcoesOrdenadasMaiorProMenor.sort((a, b) => b[1] - a[1])

      if (melhoresOpcoesOrdenadasMaiorProMenor[0][1] > melhoresOpcoesOrdenadasMaiorProMenor[1][1]) {
        return melhoresOpcoesOrdenadasMaiorProMenor[0][0]
      } else {
        const posicaoSorteada = Math.floor(Math.random() * melhoresOpcoesOrdenadasMaiorProMenor.length)

        if(melhoresOpcoesOrdenadasMaiorProMenor[posicaoSorteada].length === 0) {
          return melhoresOpcoesOrdenadasMaiorProMenor[0][0]
        }else {
          return melhoresOpcoesOrdenadasMaiorProMenor[posicaoSorteada][0]
        }
        
      }
    }
  }

  function ondeEuJaJogueiEproximaJogada(ondeEuJaJoguei, camposJogados, jogadasAdversario) {
    // componentizar isso seria onpointermove, se já fez trinta vez a mesma coisa
    let possiveisJogadas = []
    let ondeEuDevoJogar = []
    let combinacoesDeJogadas = []
    let posicaoQueSeraSorteada = 0
    let possibilidadesDeVitoriaBaseandoOndeJoguei = []
    let possibilidadesDeVitoriaBaseandoOndeAdversarioJogou = []

    winningCombinations.map(combinacao => {
      ondeEuJaJoguei.filter(numero => {
        if (String(combinacao).match(numero)) {
          possibilidadesDeVitoriaBaseandoOndeJoguei.push(combinacao)
        }
      })

      jogadasAdversario.filter(numero => {
        if (String(combinacao).match(numero)) {
          possibilidadesDeVitoriaBaseandoOndeAdversarioJogou.push(combinacao)
        }
      })
    })


    let arrayPossibilidadesDaMinhaVitoria = []
    let arrayPossibilidadesDaVitoriaDoAdversario = []
    let numerosPossibilidadeMinhaVitoria = []
    let numerosPossibilidadeVitoriaAdversario = []
    let OmeioeDoAdversario = false
    let jogadasDoAdversarioNumeros = []
    jogadasAdversario.map(numerosJogados => {
      if (numerosJogados === 4) {
        OmeioeDoAdversario = true
      }
      arrayPossibilidadesDaMinhaVitoria = possibilidadesDeVitoriaBaseandoOndeJoguei.filter(combinacao => {
        if (!String(combinacao).match(numerosJogados)) return combinacao
      })

      arrayPossibilidadesDaVitoriaDoAdversario = possibilidadesDeVitoriaBaseandoOndeAdversarioJogou.filter(combinacao => {
        if (!String(combinacao).match(numerosJogados)) return combinacao
      })
    })

    arrayPossibilidadesDaMinhaVitoria.map(combinacao => combinacao.map(numero => numerosPossibilidadeMinhaVitoria.push(numero)))
    arrayPossibilidadesDaVitoriaDoAdversario.map(combinacao => combinacao.map(numero => numerosPossibilidadeVitoriaAdversario.push(numero)))

    let teste = []
    teste = numerosPossibilidadeMinhaVitoria.filter(x => !numerosPossibilidadeVitoriaAdversario.includes(x))


    // if (OmeioeDoAdversario) {
    //   arrayPossibilidadesDaMinhaVitoria.map(combinacao => {
    //     possiveisJogadas.push(combinacao.filter(numero => numero % 2 === 0))
    //   })
    //   camposJogados.map(minhasJogadas => {
    //     possiveisJogadas.map(combinacao => combinacao.map(numero => numero !== minhasJogadas && ondeEuDevoJogar.push(numero)))
    //   })
    //   console.log('possiveisJogadas :>> ', possiveisJogadas);
    //   const posicaoSorteada = Math.floor(Math.random() * ondeEuDevoJogar.length)
    //   posicaoQueSeraSorteada = posicaoSorteada
    // } else {
      arrayPossibilidadesDaMinhaVitoria.map(combinacao => {
        possiveisJogadas.push(combinacao.filter(numero => !camposJogados.includes(numero)))
      })

      camposJogados.map(minhasJogadas => {
        possiveisJogadas.map(combinacao => combinacao.map(numero => numero !== minhasJogadas && ondeEuDevoJogar.push(numero)))
      })

      ondeEuDevoJogar = ondeEuDevoJogar.filter((element, index) => ondeEuDevoJogar.indexOf(element) === index)
      ondeEuDevoJogar = ondeEuDevoJogar.filter(x => !camposJogados.includes(x))

      const posicaoSorteada = Math.floor(Math.random() * ondeEuDevoJogar.length)
      posicaoQueSeraSorteada = posicaoSorteada


    // }
    if(ondeEuDevoJogar[posicaoQueSeraSorteada].length === 0) {
      return ondeEuDevoJogar[0]
    }else {
      return ondeEuDevoJogar[posicaoQueSeraSorteada]
    }
    
  }

  const retorno = minhajogada()

  return retorno

}


export default marcosScript