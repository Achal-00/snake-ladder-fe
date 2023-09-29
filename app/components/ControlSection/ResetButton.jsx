export default function ResetButton(props) {
  function resetHandler() {
    document
      .getElementById(`${props.playerOne.score}`)
      .classList.remove("after:content-[url('/pawn-red.svg')]");
    document
      .getElementById("1")
      .classList.add("after:content-[url('/pawn-red.svg')]");
    props.setPlayerOne({ ...props.playerOne, score: 1, flag: true });
  }

  return (
    <button
      className="px-8 py-2 rounded-md text-purple-500 font-medium border border-purple-500 hover:border-red-500 hover:text-red-500"
      onClick={resetHandler}
    >
      Reset
    </button>
  );
}
