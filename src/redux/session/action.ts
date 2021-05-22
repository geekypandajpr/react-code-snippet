import { createAction } from '@reduxjs/toolkit'
import { actions } from './reducer'

// actions to trigger saga
const login = createAction('session/login',
  (payload: LoginPayload) => ({payload})
)
const logout = createAction('session/logout')

// pick actions created by createSlice
const { setUser } = actions


export {
  login,
  logout,
  setUser
}
