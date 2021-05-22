import { createAction } from '@reduxjs/toolkit'
import { actions } from './reducer'


const load = createAction('user/load')

const insert = createAction('user/insert',
  (payload: Omit<User, 'id'>) => ({ payload })
)
const update = createAction('user/update',
  (payload: User) => ({ payload })
)

// pick actions created by createSlice
const { setUsers } = actions

export {
  load,
  insert,
  update,
  setUsers
}
