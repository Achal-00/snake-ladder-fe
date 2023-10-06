"use client";

require("dotenv").config();

import DiceLayout from "./DiceLayout";
import ResetButton from "./ResetButton";
import StatusMessage from "./StatusMessage";
import Confetti from "react-confetti";
import { motion, useAnimate } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { SET_VALUE } from "@/app/redux/reducers/diceLogged";
import { SET_PLAYER_ONE_SCORE } from "@/app/redux/reducers/playerOneLogged";
import { SET_PLAYER_TWO_SCORE } from "@/app/redux/reducers/playerTwoLogged";
import { SET_STATUS_MESSAGE } from "@/app/redux/reducers/statusMessageLogged";
import { SET_PROCESS_STATUS } from "@/app/redux/reducers/processStatusLogged";
import PawnDetails from "./PawnDetails";
import HomeButton from "./HomeButton";
import { useEffect } from "react";
import { INCREMENT_WIN_COUNT } from "@/app/redux/reducers/winCount";

export default function ControlSection() {
  const dispatch = useDispatch();
  const [scope, animate] = useAnimate();
  const username = useSelector((state) => state.authUser.user).Username;
  const token = useSelector((state) => state.authUser.user).token;
  const win = useSelector((state) => state.winCount.value);
  const playerOneScore = useSelector((state) => state.playerOneLogged.score);
  const playerTwoScore = useSelector((state) => state.playerTwoLogged.score);
  const processStatus = useSelector(
    (state) => state.processStatusLogged.status
  );
  let diceValue;

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

  window.onbeforeunload = async () => {
    if (
      playerOneScore === 100 ||
      playerTwoScore === 100 ||
      (playerOneScore === 1 && playerTwoScore === 1)
    ) {
      const response = await fetch(`${process.env.BE_LINK}/updatepawn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username,
          playerOneScore: 1,
          playerTwoScore: 1,
        }),
      });
      dispatch(SET_PLAYER_ONE_SCORE(1));
      dispatch(SET_PLAYER_TWO_SCORE(1));
    } else {
      const response = await fetch(`${process.env.BE_LINK}/updatepawn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username, playerOneScore, playerTwoScore }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(data.error);
      }

      if (response.ok) {
        console.log(data.success);
      }
    }
  };

  const updateWinCount = async () => {
    let newCount = win + 1;
    const response = await fetch(`${process.env.BE_LINK}/updatewincount`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ username, newCount }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data.error);
    }

    if (response.ok) {
      console.log(data.success);
    }
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    document
      .getElementById(`${playerOneScore}`)
      .classList.add("after:content-[url('/pawn-red.svg')]");
    document
      .getElementById(`${playerTwoScore}`)
      .classList.add("after:content-[url('/pawn-yellow.svg')]");
  }, []);

  async function startProcess() {
    try {
      dispatch(SET_PROCESS_STATUS(true));
      await diceAnimate();
      await playerOne();
      await playerTwo();
      await sleep(1000).then(() => {
        dispatch(SET_STATUS_MESSAGE("YOUR TURN"));
      });
      dispatch(SET_PROCESS_STATUS(false));
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

      if (newScore === 100) {
        dispatch(SET_STATUS_MESSAGE("YOU WON"));
        dispatch(INCREMENT_WIN_COUNT());
        updateWinCount();
        throw new Error("won");
      }

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

        if (newScore === 100) {
          dispatch(SET_STATUS_MESSAGE("YOU LOSE"));
          throw new Error("lose");
        }

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

  return (
    <section className="flex flex-col gap-8 border-2 py-4 px-8">
      <div className="flex justify-between items-center gap-4">
        <DiceLayout scope={scope} />
        <motion.button
          whileTap={{ scale: 1.3 }}
          className="bg-purple-500 px-8 py-2 rounded-md text-white font-medium shadow-md hover:bg-purple-400 process-btn"
          disabled={processStatus}
          onClick={startProcess}
        >
          Roll
        </motion.button>
      </div>
      <StatusMessage />
      <ResetButton />
      <PawnDetails />
      <HomeButton />
      {playerOneScore === 100 && <Confetti className="w-[100dvw] h-[100dvh]" />}
    </section>
  );
}
