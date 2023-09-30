"use client";

import { SET_VALUE } from "@/app/redux/reducers/dice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function DiceGenerator(props) {
  const dispatch = useDispatch();

  // const test = useSelector((state) => state.dice.value);

  // useEffect(() => {
  //   console.log(test);
  // }, [test])



  // const [isInitialLoad, setIsInitialLoad] = useState(false);

  // useEffect(() => {
  //   setIsInitialLoad(true);
  // }, []);

  // const constraints = {
  //   2: 38,
  //   7: 14,
  //   8: 31,
  //   15: 26,
  //   21: 42,
  //   28: 84,
  //   36: 44,
  //   51: 67,
  //   71: 91,
  //   78: 98,
  //   87: 94,
  //   16: 6,
  //   46: 25,
  //   49: 11,
  //   62: 19,
  //   64: 60,
  //   74: 53,
  //   89: 68,
  //   92: 88,
  //   95: 75,
  //   99: 80,
  // };

  // function DiceGenerator() {
  //   props.setDiceValue({
  //     ...props.diceValue,
  //     animationFlag: true,
  //   });
  //   props.startProcess();
  // }

  // useEffect(() => {
  //   if (isInitialLoad) {
  //     if (props.playerOne.flag) {
  //       let tot = props.playerOne.score + props.diceValue.value;

  //       if (tot <= 100) {
  //         document
  //           .getElementById(`${props.playerOne.score}`)
  //           .classList.remove("after:content-[url('/pawn-red.svg')]");
  //         document
  //           .getElementById(`${tot}`)
  //           .classList.add("after:content-[url('/pawn-red.svg')]");

  //         if (`${tot}` in constraints) {
  //           setTimeout(() => {
  //             document
  //               .getElementById(`${tot}`)
  //               .classList.remove("after:content-[url('/pawn-red.svg')]");
  //             document
  //               .getElementById(`${constraints[tot]}`)
  //               .classList.add("after:content-[url('/pawn-red.svg')]");
  //             props.setPlayerOne({
  //               ...props.playerOne,
  //               score: constraints[tot],
  //               flag: false,
  //             });
  //             return;
  //           }, 500);
  //         }

  //         props.setPlayerOne({ ...props.playerOne, score: tot, flag: false });
  //       }
  //     } else {
  //       let tot = props.playerTwo.score + props.diceValue.value;

  //       if (tot <= 100) {
  //         document
  //           .getElementById(`${props.playerTwo.score}`)
  //           .classList.remove("after:content-[url('/pawn-yellow.svg')]");
  //         document
  //           .getElementById(`${tot}`)
  //           .classList.add("after:content-[url('/pawn-yellow.svg')]");

  //         if (`${tot}` in constraints) {
  //           setTimeout(() => {
  //             document
  //               .getElementById(`${tot}`)
  //               .classList.remove("after:content-[url('/pawn-yellow.svg')]");
  //             document
  //               .getElementById(`${constraints[tot]}`)
  //               .classList.add("after:content-[url('/pawn-yellow.svg')]");
  //             props.setPlayerTwo({
  //               ...props.playerTwo,
  //               score: constraints[tot],
  //               flag: true,
  //             });
  //             props.setPlayerOne({ ...props.playerOne, flag: true });
  //             return;
  //           }, 500);
  //         }

  //         props.setPlayerTwo({ ...props.playerTwo, score: tot, flag: true });
  //         props.setPlayerOne({ ...props.playerOne, flag: true });
  //       }
  //     }
  //   }
  // }, [props.diceValue.flag]);

  // useEffect(() => {
  //   if (!props.playerOne.flag) {
  //     setTimeout(() => {
  //       DiceGenerator();
  //     }, 1500);
  //   }
  // }, [props.playerOne.flag]);

  // function aiTurn() {}

  // useEffect(() => {
  //   if (isInitialLoad) {
  //     props.setPlayerOne({ ...props.playerOne, flag: false });
  //     console.log(props.playerOne);
  //   }
  // }, [props.playerOne.score]);

  return (
    <button
      className={`bg-purple-500 px-8 py-2 rounded-md text-white font-medium shadow-md hover:bg-purple-400`}
      // onClick={() => dispatch(SET_VALUE(Math.floor(Math.random() * 6) + 1))}
      onClick={startProcess}
    >
      Roll
    </button>
  );
}
