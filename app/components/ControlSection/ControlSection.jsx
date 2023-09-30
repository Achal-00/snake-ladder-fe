"use client";
import DiceLayout from "./DiceLayout";
import ResetButton from "./ResetButton";
import StatusMessage from "./StatusMessage";
import { useEffect, useState } from "react";
import DiceGenerator from "./DiceGenerator";
import Confetti from "react-confetti";
import { useAnimate } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { SET_VALUE } from "@/app/redux/reducers/dice";
import { SET_PLAYER_ONE_SCORE } from "@/app/redux/reducers/playerOne";

export default function ControlSection() {
  // const [diceValue, setDiceValue] = useState({
  //   value: 1,
  //   flag: false,
  //   animationFlag: false,
  // });
  // const [playerOne, setPlayerOne] = useState({
  //   score: 1,
  //   flag: true,
  // });
  // const [playerTwo, setPlayerTwo] = useState({
  //   score: 1,
  //   flag: true,
  // });
  // function startProcess() {
  //   console.log("started");
  // }

  const dispatch = useDispatch();
  const [scope, animate] = useAnimate();

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

  const diceValue = useSelector((state) => state.dice.value);
  const playerOneScore = useSelector((state) => state.playerOne.score);

  async function startProcess() {
    await diceAnimate();
    await playerOne();
    console.log("pawn movement completed");
  }

  async function diceAnimate() {
    await animate(
      scope.current,
      { rotate: [0, 90, 0, 90, 0, 90, 0, 90, 0, 90, 0] },
      { duration: 1 }
    );
    dispatch(SET_VALUE(Math.floor(Math.random() * 6) + 1));
  }

  async function playerOne() {
    console.log(diceValue);
    const newScore = diceValue + playerOneScore;
    

    // if (newScore <= 100) {
    //   document
    //     .getElementById(`${playerOneScore}`)
    //     .classList.remove("after:content-[url('/pawn-red.svg')]");
    //   document
    //     .getElementById(`${newScore}`)
    //     .classList.add("after:content-[url('/pawn-red.svg')]");
    //   dispatch(SET_PLAYER_ONE_SCORE(newScore));
    // }
  }

  return (
    <section className="flex flex-col gap-8 border-2 py-4 px-8">
      <div className="flex justify-between items-center gap-4">
        <DiceLayout scope={scope} />
        <button
          className={`bg-purple-500 px-8 py-2 rounded-md text-white font-medium shadow-md hover:bg-purple-400`}
          // onClick={() => dispatch(SET_VALUE(Math.floor(Math.random() * 6) + 1))}
          onClick={startProcess}
        >
          Roll
        </button>
      </div>
      <div>
        <StatusMessage />
      </div>
      <div>
        <ResetButton />
      </div>
      {/* {playerOne.score === 100 && (
              <Confetti className="w-[100dvw] h-[100dvh]" />
            )} */}
    </section>
  );
}
