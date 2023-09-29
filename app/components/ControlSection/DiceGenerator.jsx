"use client";

import { useEffect } from "react";

export default function DiceGenerator(props) {
  function DiceGenerator() {
    props.setDiceValue(Math.floor(Math.random() * 6) + 1);
  }

  useEffect(() => {
    let pos = props.user1Score + props.diceValue;
    document
      .getElementById(`${props.user1Score}`)
      .classList.remove(
        "relative",
        "z-50",
        "after:content-[url('/pawn-red.svg')]",
        "after:content-[url('/pawn-yellow.svg')]",
        "after:absolute",
        "after:top-1/2",
        "after:-translate-y-1/2",
        "after:left-1/2",
        "after:-translate-x-1/2",
        "after:w-[75%]",
        "after:h-[75%]"
      );
    props.setUser1Score(pos);
  }, [props.diceValue]);

  useEffect(() => {
    if (props.user1Score <= 100) {
      document
      .getElementById(`${props.user1Score}`)
      .classList.add(
        "relative",
        "after:content-[url('/pawn-red.svg')]",
        "after:content-[url('/pawn-yellow.svg')]",
        "after:z-20",
        "after:absolute",
        "after:top-1/2",
        "after:-translate-y-1/2",
        "after:left-1/2",
        "after:-translate-x-1/2",
        "after:w-[75%]",
        "after:h-[75%]"
      );
      console.log(props.user1Score);
    }
  }, [props.user1Score]);

  return (
    <button
      className="bg-purple-500 px-8 py-2 rounded-md text-white font-medium shadow-md hover:bg-purple-400"
      onClick={DiceGenerator}
    >
      Roll
    </button>
  );
}
