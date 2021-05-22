import { createSlice, PayloadAction } from '@reduxjs/toolkit';

let initialState: SessionState = {
  user: undefined, // undefined === not authorized
}

const { actions, reducer } = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | undefined>) {
      state.user = action.payload
    },
  }
})

export { actions, reducer }
