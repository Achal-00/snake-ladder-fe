"use client";

import { useEffect } from "react";

export default function DiceGenerator(props) {

  const constraints = {
    2: 42,
    7:14,
    8:31,
  }

  async function DiceGenerator() {
    await props.setDiceValue({
      ...props.diceValue,
      value: Math.floor(Math.random() * 6) + 1,
      flag: !props.diceValue.flag,
    });
  }

  useEffect(() => {
    if (props.playerOneScore + props.diceValue.value <= 100) {
      document
        .getElementById(`${props.playerOneScore}`)
        .classList.remove("after:content-[url('/pawn-red.svg')]");
      document
        .getElementById(`${props.playerOneScore + props.diceValue.value}`)
        .classList.add("after:content-[url('/pawn-red.svg')]");
      props.setPlayerOneScore(props.playerOneScore + props.diceValue.value);
    }
  }, [props.diceValue.flag]);

  return (
    <button
      className="bg-purple-500 px-8 py-2 rounded-md text-white font-medium shadow-md hover:bg-purple-400"
      onClick={DiceGenerator}
    >
      Roll
    </button>
  );
}
