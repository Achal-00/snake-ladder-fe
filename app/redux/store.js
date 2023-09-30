import { configureStore } from "@reduxjs/toolkit";
import diceReducer from "./reducers/dice";
import playerOneReducer from "./reducers/playerOne";

export default configureStore({
  reducer: {
    dice: diceReducer,
    playerOne: playerOneReducer,
  },
});
