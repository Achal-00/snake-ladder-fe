import Lottie from "lottie-react";
import diceAnimation from "./diceAnimation.json";

export default function DiceAnimation() {
  return (
    <Lottie
      animationData={diceAnimation}
      loop={true}
      className="w-1/2 justify-self-center"
    />
  );
}
