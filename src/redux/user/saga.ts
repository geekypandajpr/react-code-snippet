import { takeLatest, call, put } from 'redux-saga/effects'
import { load, setUsers } from './action'


const userlist: User[] = [
  { id: 1, name: 'testadmin', role: 'admin', permissions: ['maintenance', 'treatment'] },
  { id: 2, name: 'testtech', role: 'tech', permissions: ['maintenance']},
  { id: 3, name: 'testuser', role: 'aesthetician', permissions: ['treatment']}
]

function* loadSaga() {
  yield put(setUsers(userlist))
}

function* userEffects() {
  yield takeLatest(load, loadSaga);
}
const userSagas = [
  call(userEffects)
]

export default userSagas
