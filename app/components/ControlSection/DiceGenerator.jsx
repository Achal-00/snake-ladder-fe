"use client";

import { useEffect } from "react";

export default function DiceGenerator(props) {
  const constraints = {
    2: 38,
    7: 14,
    8: 31,
    15: 26,
    21: 42,
    28: 84,
    36: 44,
    51: 67,
    71: 91,
    78: 98,
    87: 94,
    16: 6,
    46: 25,
    49: 11,
    62: 19,
    64: 60,
    74: 53,
    89: 68,
    92: 88,
    95: 75,
    99: 80,
  };

  async function DiceGenerator() {
    await props.setDiceValue({
      ...props.diceValue,
      value: Math.floor(Math.random() * 6) + 1,
      flag: !props.diceValue.flag,
    });
  }

  useEffect(() => {
    let tot = props.playerOne.score + props.diceValue.value;

    if (tot <= 100) {
      document
        .getElementById(`${props.playerOne.score}`)
        .classList.remove("after:content-[url('/pawn-red.svg')]");
      document
        .getElementById(`${tot}`)
        .classList.add("after:content-[url('/pawn-red.svg')]");

      if (`${tot}` in constraints) {
        setTimeout(() => {
          document
            .getElementById(`${tot}`)
            .classList.remove("after:content-[url('/pawn-red.svg')]");
          document
            .getElementById(`${constraints[tot]}`)
            .classList.add("after:content-[url('/pawn-red.svg')]");
          props.setPlayerOne({
            ...props.playerOne,
            score: constraints[tot],
          });
          return;
        }, 500);
      }

      props.setPlayerOne({ ...props.playerOne, score: tot });
    }
  }, [props.diceValue.flag]);

  useEffect(() => {
    props.setPlayerOne({ ...props.playerOne, flag: false });
    console.log(props.playerOne);
  }, [props.playerOne.score]);

  return (
    <button
      className={`bg-purple-500 px-8 py-2 rounded-md text-white font-medium shadow-md hover:bg-purple-400`}
      onClick={DiceGenerator}
    >
      Roll
    </button>
  );
}
