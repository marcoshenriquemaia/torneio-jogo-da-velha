import alanScript from "./alan.js";
import aldemirScript from "./aldemir.js";
import baquetaScript from "./baqueta.js";
import evailsonScript from "./evailson.js";
import kamilaScript from "./kamila.js";
import lindomarScript from "./lindomar.js";
import lucasScript from "./lucas.js";
import luisScript from "./luis.js";

const players = {
  data: [
    {
      name: "Alan",
      script: alanScript,
      photo: "./src/images/alan.jpg",
      draw: 0,
      lose: 0,
      win: 0,
      games: 0,
    },
    {
      name: "Aldemir",
      script: aldemirScript,
      photo: "./src/images/aldemir.jpg",
      draw: 0,
      lose: 0,
      win: 0,
      games: 0,
    },
    {
      name: "Baqueta",
      script: baquetaScript,
      photo: "./src/images/baqueta.jpg",
      draw: 0,
      lose: 0,
      win: 0,
      games: 0,
    },
    {
      name: "Evailson",
      script: evailsonScript,
      photo: "./src/images/evailson.jpg",
      draw: 0,
      lose: 0,
      win: 0,
      games: 0,
    },
    {
      name: "Kamila",
      script: kamilaScript,
      photo: "./src/images/kamila.jpg",
      draw: 0,
      lose: 0,
      win: 0,
      games: 0,
    },
    {
      name: "Lindomar",
      script: lindomarScript,
      photo: "./src/images/lindomar.jpg",
      draw: 0,
      lose: 0,
      win: 0,
      games: 0,
    },
    {
      name: "Lucas",
      script: lucasScript,
      photo: "./src/images/lucas.jpg",
      draw: 0,
      lose: 0,
      win: 0,
      games: 0,
    },
    {
      name: "Luis",
      script: luisScript,
      photo: "./src/images/luis.jpg",
      draw: 0,
      lose: 0,
      win: 0,
      games: 0,
    },
  ],

  getAll: () => {
    return [...players.data];
  },

  getByName: (name) => {
    const playerList = players.getAll();

    return playerList.find((player) => player.name === name);
  },

  addPoint: ({ player1, player2, winner }) => {
    const playerDictio = {
      X: player1,
      O: player2,
    };

    console.log(winner)

    if (winner === "draw") {
      const playerList = players.getAll();
      const newPlayerList = playerList.reduce((acc, player) => {
        if (player1.name === player.name || player2.name === player.name)
          return [...acc, { ...player, games: player.games + 1, draw: player.draw + 1 }];
        return acc
      }, []);

      console.log(newPlayerList)
    }

    const winnerPlayer = playerDictio[winner];
    const loserPlayer = playerDictio[winner === "X" ? "O" : "x"];
  },
};

export default players;
