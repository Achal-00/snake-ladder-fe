import { useSelector } from "react-redux";

export default function DiceLayout(props) {
  const diceValue = useSelector((state) => state.diceLogged.value);

  return (
    <div className="relative">
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
