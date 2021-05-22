import { createSlice, PayloadAction } from '@reduxjs/toolkit';

let initialState: UserState = {
  users: undefined, // undefined === not loaded
}

const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload
    },
  }
})

export { actions, reducer }
