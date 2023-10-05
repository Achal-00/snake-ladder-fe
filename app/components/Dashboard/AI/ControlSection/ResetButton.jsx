import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { SET_PLAYER_ONE_SCORE } from "@/app/redux/reducers/playerOneLogged";
import { SET_PLAYER_TWO_SCORE } from "@/app/redux/reducers/playerTwoLogged";
import { SET_PROCESS_STATUS } from "@/app/redux/reducers/processStatusLogged";
import { SET_STATUS_MESSAGE } from "@/app/redux/reducers/statusMessageLogged";

export default function ResetButton() {
  const dispatch = useDispatch();
  const playerOneCurrentScore = useSelector(
    (state) => state.playerOneLogged.score
  );
  const playerTwoCurrentScore = useSelector(
    (state) => state.playerTwoLogged.score
  );
  const processStatus = useSelector(
    (state) => state.processStatusLogged.status
  );

  function resetHandler() {
    if (
      !processStatus ||
      playerOneCurrentScore === 100 ||
      playerTwoCurrentScore === 100
    ) {
      document
        .getElementById(`${playerOneCurrentScore}`)
        .classList.remove("after:content-[url('/pawn-red.svg')]");
      document
        .getElementById(`${playerTwoCurrentScore}`)
        .classList.remove("after:content-[url('/pawn-yellow.svg')]");
      document
        .getElementById("1")
        .classList.add("after:content-[url('/pawn-red.svg')]");
      document
        .getElementById("1")
        .classList.add("after:content-[url('/pawn-yellow.svg')]");
      dispatch(SET_PLAYER_ONE_SCORE(1));
      dispatch(SET_PLAYER_TWO_SCORE(1));
      dispatch(SET_PROCESS_STATUS(false));
      dispatch(SET_STATUS_MESSAGE("YOUR TURN"));
    }
  }

  return (
    <div>
      <motion.button
        whileTap={{ scale: 1.3 }}
        className="px-8 py-2 rounded-md text-purple-500 font-medium border border-purple-500 hover:border-red-500 hover:text-red-500"
        onClick={resetHandler}
      >
        Reset
      </motion.button>
    </div>
  );
}
