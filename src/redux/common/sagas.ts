import { all } from 'redux-saga/effects'
import sessionSaga from '../session/saga'
import userSagas from '../user/saga'
import deviceSaga from '../device/saga'


export default function* rootSaga() {
  yield all([
    ...sessionSaga,
    ...userSagas,
    ...deviceSaga,
  ])
}
