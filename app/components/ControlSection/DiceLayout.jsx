export default function DiceLayout(props) {
  return (
    <div className="border w-full relative">
      <div className="grid grid-cols-3 gap-2 w-20 h-max p-2 rounded-md bg-red-50 shadow-lg relative right-0">
        <div
          className={`w-4 h-4 bg-red-400 rounded-full justify-self-center ${
            props.diceValue === 2 ||
            props.diceValue === 4 ||
            props.diceValue === 5 ||
            props.diceValue === 6
              ? "opacity-100"
              : "opacity-0"
          }`}
        ></div>
        <div
          className={`w-4 h-4 bg-red-400 rounded-full justify-self-center opacity-0`}
        ></div>
        <div
          className={`w-4 h-4 bg-red-400 rounded-full justify-self-center ${
            props.diceValue === 3 ||
            props.diceValue === 4 ||
            props.diceValue === 5 ||
            props.diceValue === 6
              ? "opacity-100"
              : "opacity-0"
          }`}
        ></div>
        <div
          className={`w-4 h-4 bg-red-400 rounded-full justify-self-center ${
            props.diceValue === 6 ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <div
          className={`w-4 h-4 bg-red-400 rounded-full justify-self-center ${
            props.diceValue === 1 ||
            props.diceValue === 5 ||
            props.diceValue === 3
              ? "opacity-100"
              : "opacity-0"
          }`}
        ></div>
        <div
          className={`w-4 h-4 bg-red-400 rounded-full justify-self-center ${
            props.diceValue === 6 ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <div
          className={`w-4 h-4 bg-red-400 rounded-full justify-self-center ${
            props.diceValue === 3 ||
            props.diceValue === 4 ||
            props.diceValue === 5 ||
            props.diceValue === 6
              ? "opacity-100"
              : "opacity-0"
          }`}
        ></div>
        <div
          className={`w-4 h-4 bg-red-400 rounded-full justify-self-center opacity-0`}
        ></div>
        <div
          className={`w-4 h-4 bg-red-400 rounded-full justify-self-center ${
            props.diceValue === 2 ||
            props.diceValue === 4 ||
            props.diceValue === 5 ||
            props.diceValue === 6
              ? "opacity-100"
              : "opacity-0"
          }`}
        ></div>
      </div>
    </div>
  );
}
