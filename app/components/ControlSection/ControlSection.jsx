"use client";

import { useState } from "react";
import DiceGenerator from "./DiceGenerator";
import DiceLayout from "./DiceLayout";

export default function ControlSection() {
  const [diceValue, setDiceValue] = useState(0);
  const [user1Score, setUser1Score] = useState(1);
  const [user2Score, setUser2Score] = useState(1);

  return (
    <section className="flex flex-col gap-8 border-2 py-4 px-8">
      <div className="flex justify-between items-center gap-4">
        <DiceLayout diceValue={diceValue} />
        <DiceGenerator
          diceValue={diceValue}
          setDiceValue={setDiceValue}
          user1Score={user1Score}
          setUser1Score={setUser1Score}
        />
      </div>
      <div>
        <h1>Snake & Ladder</h1>
      </div>
    </section>
  );
}
