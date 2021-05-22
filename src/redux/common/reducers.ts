import { combineReducers } from '@reduxjs/toolkit';
import { reducer as sessionReducer } from '../session/reducer';
import { reducer as userReducer } from '../user/reducer';
import { reducer as deviceReducer } from '../device/reducer';

const reducers = {
  session: sessionReducer,
  user: userReducer,
  device: deviceReducer
};

export let rootReducer = combineReducers({ 
  ...reducers
});

export default function createReducer(injectedReducers = {}) {
  rootReducer = combineReducers({
    ...reducers,
    ...injectedReducers,
  });

  return rootReducer;
}

export type RootState = ReturnType<typeof rootReducer>
