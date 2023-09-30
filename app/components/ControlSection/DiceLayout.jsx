import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function DiceLayout(props) {
  const diceValue = useSelector((state) => state.dice.value);

  // const [scope, animate] = useAnimate();

  // useEffect(() => {
  //   (async () => {
  //     if (props.diceValue.animationFlag) {
  //       await animate(
  //         scope.current,
  //         { rotate: [0, 90, 0, 90, 0, 90, 0, 90, 0, 90, 0] },
  //         { duration: 1 }
  //       );
  //       props.setDiceValue({
  //         ...props.diceValue,
  //         value: Math.floor(Math.random() * 6) + 1,
  //         flag: !props.diceValue.flag,
  //       });
  //     }
  //   })();
  // }, [props.diceValue.animationFlag]);

  // setTimeout(() => {
  //   props.setDiceValue({ ...props.diceValue, animationFlag: false });
  // }, 2000);

  return (
    <div className="border w-full relative">
      <div
        ref={props.scope}
        className="grid grid-cols-3 gap-2 w-20 h-max p-2 rounded-md bg-red-50 shadow-lg relative right-0"
      >
        <div
          className={`w-4 h-4 bg-red-400 rounded-full justify-self-center ${
            diceValue === 2 ||
            diceValue === 4 ||
            diceValue === 5 ||
            diceValue === 6
              ? "opacity-100"
              : "opacity-0"
          }`}
        ></div>
        <div
          className={`w-4 h-4 bg-red-400 rounded-full justify-self-center opacity-0`}
        ></div>
        <div
          className={`w-4 h-4 bg-red-400 rounded-full justify-self-center ${
            diceValue === 3 ||
            diceValue === 4 ||
            diceValue === 5 ||
            diceValue === 6
              ? "opacity-100"
              : "opacity-0"
          }`}
        ></div>
        <div
          className={`w-4 h-4 bg-red-400 rounded-full justify-self-center ${
            diceValue === 6 ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <div
          className={`w-4 h-4 bg-red-400 rounded-full justify-self-center ${
            diceValue === 1 || diceValue === 5 || diceValue === 3
              ? "opacity-100"
              : "opacity-0"
          }`}
        ></div>
        <div
          className={`w-4 h-4 bg-red-400 rounded-full justify-self-center ${
            diceValue === 6 ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <div
          className={`w-4 h-4 bg-red-400 rounded-full justify-self-center ${
            diceValue === 3 ||
            diceValue === 4 ||
            diceValue === 5 ||
            diceValue === 6
              ? "opacity-100"
              : "opacity-0"
          }`}
        ></div>
        <div
          className={`w-4 h-4 bg-red-400 rounded-full justify-self-center opacity-0`}
        ></div>
        <div
          className={`w-4 h-4 bg-red-400 rounded-full justify-self-center ${
            diceValue === 2 ||
            diceValue === 4 ||
            diceValue === 5 ||
            diceValue === 6
              ? "opacity-100"
              : "opacity-0"
          }`}
        ></div>
      </div>
    </div>
  );
}
