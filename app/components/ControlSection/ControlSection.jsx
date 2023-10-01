"use client";
import DiceLayout from "./DiceLayout";
import ResetButton from "./ResetButton";
import StatusMessage from "./StatusMessage";
import Confetti from "react-confetti";
import { useAnimate } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { SET_VALUE } from "@/app/redux/reducers/dice";
import { SET_PLAYER_ONE_SCORE } from "@/app/redux/reducers/playerOne";
import { SET_PLAYER_TWO_SCORE } from "@/app/redux/reducers/PlayerTwo";
import { SET_STATUS_MESSAGE } from "@/app/redux/reducers/statusMessage";
import { SET_PROCESS_STATUS } from "@/app/redux/reducers/processStatus";

export default function ControlSection() {
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

  let diceValue;
  const playerOneScore = useSelector((state) => state.playerOne.score);
  const playerTwoScore = useSelector((state) => state.playerTwo.score);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function startProcess() {
    try {
      dispatch(SET_PROCESS_STATUS(true));
      await diceAnimate();
      await playerOne();
      await playerTwo();
      await sleep(1000).then(() => {
        dispatch(SET_STATUS_MESSAGE("YOUR TURN"));
        document.querySelector(".process-btn").removeAttribute("disabled");
      });
      dispatch(SET_PROCESS_STATUS(false));
      console.log("pawn movements completed");
    } catch (err) {
      return;
    }
  }

  async function diceAnimate() {
    await animate(
      scope.current,
      { rotate: [0, 90, 0, 90, 0, 90, 0, 90, 0, 90, 0] },
      { duration: 1 }
    );
    diceValue = Math.floor(Math.random() * 6) + 1;
    dispatch(SET_VALUE(diceValue));
  }

  async function playerOne() {
    const newScore = diceValue + playerOneScore;
    if (newScore <= 100) {
      document
        .getElementById(`${playerOneScore}`)
        .classList.remove("after:content-[url('/pawn-red.svg')]");
      document
        .getElementById(`${newScore}`)
        .classList.add("after:content-[url('/pawn-red.svg')]");

      dispatch(SET_PLAYER_ONE_SCORE(newScore));

      if (newScore === 100) throw new Error("Finished");

      if (`${newScore}` in constraints) {
        await sleep(500).then(() => {
          document
            .getElementById(`${newScore}`)
            .classList.remove("after:content-[url('/pawn-red.svg')]");
          document
            .getElementById(`${constraints[newScore]}`)
            .classList.add("after:content-[url('/pawn-red.svg')]");

          dispatch(SET_PLAYER_ONE_SCORE(constraints[newScore]));
        });
      }
    }
  }

  async function playerTwo() {
    await sleep(500).then(() =>
      dispatch(SET_STATUS_MESSAGE("OPPONENT'S TURN"))
    );

    await sleep(2000).then(async () => {
      await diceAnimate();

      const newScore = diceValue + playerTwoScore;
      if (newScore <= 100) {
        document
          .getElementById(`${playerTwoScore}`)
          .classList.remove("after:content-[url('/pawn-yellow.svg')]");
        document
          .getElementById(`${newScore}`)
          .classList.add("after:content-[url('/pawn-yellow.svg')]");

        dispatch(SET_PLAYER_TWO_SCORE(newScore));

        if (newScore === 100) throw new Error("Finished");

        if (`${newScore}` in constraints) {
          await sleep(500).then(() => {
            document
              .getElementById(`${newScore}`)
              .classList.remove("after:content-[url('/pawn-yellow.svg')]");
            document
              .getElementById(`${constraints[newScore]}`)
              .classList.add("after:content-[url('/pawn-yellow.svg')]");
            dispatch(SET_PLAYER_TWO_SCORE(constraints[newScore]));
          });
        }
      }
    });
  }

  if (playerOneScore === 100) {
    dispatch(SET_STATUS_MESSAGE("YOU WON"));
  }

  if (playerTwoScore === 100) {
    dispatch(SET_STATUS_MESSAGE("YOU LOSE"));
  }

  return (
    <section className="flex flex-col gap-8 border-2 py-4 px-8">
      <div className="flex justify-between items-center gap-4">
        <DiceLayout scope={scope} />
        <button
          className="bg-purple-500 px-8 py-2 rounded-md text-white font-medium shadow-md hover:bg-purple-400 process-btn"
          onClick={(e) => {
            e.currentTarget.setAttribute("disabled", "");
            startProcess();
          }}
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
      {playerOneScore === 100 && <Confetti className="w-[100dvw] h-[100dvh]" />}
    </section>
  );
}
