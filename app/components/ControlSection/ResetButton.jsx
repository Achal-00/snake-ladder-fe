export default function ResetButton(props) {
  // async function resetHandler() {
  //   document
  //     .getElementById(`${props.playerOne.score}`)
  //     .classList.remove("after:content-[url('/pawn-red.svg')]");
  //     document
  //     .getElementById(`${props.playerTwo.score}`)
  //     .classList.remove("after:content-[url('/pawn-yellow.svg')]");
  //     document
  //     .getElementById("1")
  //     .classList.add("after:content-[url('/pawn-yellow.svg')]");
  //   document
  //     .getElementById("1")
  //     .classList.add("after:content-[url('/pawn-red.svg')]");
  //   await props.setPlayerOne({ ...props.playerOne, score: 1, flag: true });
  //   await props.setPlayerTwo({ ...props.playerTwo, score: 1, flag: true });
  // }

  return (
    <button className="px-8 py-2 rounded-md text-purple-500 font-medium border border-purple-500 hover:border-red-500 hover:text-red-500">
      Reset
    </button>
  );
}
