import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import diceReducer from "./reducers/dice";
import playerOneReducer from "./reducers/playerOne";
import playerTwoReducer from "./reducers/PlayerTwo";
import statusMessageReducer from "./reducers/statusMessage";
import processStatusReducer from "./reducers/processStatus";
import authUserReducer from "./reducers/authUser";
import diceLoggedReducer from "./reducers/diceLogged";
import playerOneLoggedReducer from "./reducers/PlayerOneLogged";
import playerTwoLoggedReducer from "./reducers/playerTwoLogged";
import statusMessageLoggedReducer from "./reducers/statusMessageLogged";
import processStatusLoggedReducer from "./reducers/processStatusLogged";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "user",
  storage,
  blacklist: [
    "dice",
    "playerOne",
    "playerTwo",
    "statusMessage",
    "processStatus",
    "diceLogged",
    "playerOneLogged",
    "playerTwoLogged",
    "statusMessageLogged",
    "processStatusLogged",
  ],
};

const rootReducer = combineReducers({
  dice: diceReducer,
  playerOne: playerOneReducer,
  playerTwo: playerTwoReducer,
  statusMessage: statusMessageReducer,
  processStatus: processStatusReducer,
  authUser: authUserReducer,
  diceLogged: diceLoggedReducer,
  playerOneLogged: playerOneLoggedReducer,
  playerTwoLogged: playerTwoLoggedReducer,
  statusMessageLogged: statusMessageLoggedReducer,
  processStatusLogged: processStatusLoggedReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

let persistor = persistStore(store);

export { store, persistor };
