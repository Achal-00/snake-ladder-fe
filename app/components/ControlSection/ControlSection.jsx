"use client";

import { useState } from "react";
import DiceGenerator from "./DiceGenerator";
import DiceLayout from "./DiceLayout";
import Confetti from "react-confetti";
import ResetButton from "./ResetButton";
import StatusMessage from "./StatusMessage";

export default function ControlSection() {
  const [diceValue, setDiceValue] = useState({
    value: 0,
    flag: false,
  });
  const [playerOne, setPlayerOne] = useState({
    score: 1,
    flag: true,
  });

  return (
    <section className="flex flex-col gap-8 border-2 py-4 px-8">
      <div className="flex justify-between items-center gap-4">
        <DiceLayout diceValue={diceValue.value} />
        <DiceGenerator
          diceValue={diceValue}
          setDiceValue={setDiceValue}
          playerOne={playerOne}
          setPlayerOne={setPlayerOne}
        />
      </div>
      <div>
        <StatusMessage playerOneScore={playerOne.score} />
      </div>
      <div>
        <ResetButton
          playerOne={playerOne}
          setPlayerOne={setPlayerOne}
        />
      </div>
      {playerOne.score === 100 && <Confetti className="w-[100dvw] h-[100dvh]" />}
    </section>
  );
}
