import { configureStore } from "@reduxjs/toolkit";
import diceReducer from "./reducers/dice";
import playerOneReducer from "./reducers/playerOne";
import playerTwoReducer from "./reducers/PlayerTwo";
import statusMessageReducer from "./reducers/statusMessage";

export default configureStore({
  reducer: {
    dice: diceReducer,
    playerOne: playerOneReducer,
    playerTwo: playerTwoReducer,
    statusMessage: statusMessageReducer,
  },
});
