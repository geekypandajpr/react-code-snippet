import { takeLatest, call, put, select } from 'redux-saga/effects'
import { RootState } from '../common/reducers'
import { login, logout, setUser } from './action'


function* loginSaga({ payload }: ReturnType<typeof login>) {
  const { username, password } = payload

  try {
    const user: User | undefined = yield select(
      (state: RootState) => state.user.users?.find(user => user.name === username)
    )

    if (user && password === 'test') {
      // keep session in localStorage
      localStorage.setItem('session-token', username) // TODO: need token
      localStorage.setItem('session-user', JSON.stringify(user))
      const curr = Date.now()
      localStorage.setItem('session-exp', curr.toString())
      // triggers <App> render
      yield put(setUser(user))
    } else {
      alert('username or password is incorrect.')
      yield put(setUser(undefined))
    }
  } catch (err) {
    console.log('fsdfadsf')
  }
}

function* logoutSaga() {
  localStorage.removeItem('session-token')
  localStorage.removeItem('session-user')
  localStorage.removeItem('session-exp')
  yield put(setUser(undefined))
}


function* userEffects() {
  yield takeLatest(login, loginSaga);
  yield takeLatest(logout, logoutSaga)
}

const sessionSagas = [
  call(userEffects)
]

export default sessionSagas
