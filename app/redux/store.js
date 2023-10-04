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
  ],
};

const rootReducer = combineReducers({
  dice: diceReducer,
  playerOne: playerOneReducer,
  playerTwo: playerTwoReducer,
  statusMessage: statusMessageReducer,
  processStatus: processStatusReducer,
  authUser: authUserReducer,
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
