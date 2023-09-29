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
  const [playerOneScore, setPlayerOneScore] = useState(1);

  return (
    <section className="flex flex-col gap-8 border-2 py-4 px-8">
      <div className="flex justify-between items-center gap-4">
        <DiceLayout diceValue={diceValue.value} />
        <DiceGenerator
          diceValue={diceValue}
          setDiceValue={setDiceValue}
          playerOneScore={playerOneScore}
          setPlayerOneScore={setPlayerOneScore}
        />
      </div>
      <div>
        <StatusMessage playerOneScore={playerOneScore} />
      </div>
      <div>
        <ResetButton
          playerOneScore={playerOneScore}
          setPlayerOneScore={setPlayerOneScore}
        />
      </div>
      {playerOneScore === 100 && <Confetti className="w-[100dvw] h-[100dvh]" />}
    </section>
  );
}
