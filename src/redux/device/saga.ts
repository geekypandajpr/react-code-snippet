import { takeLatest, call, put } from 'redux-saga/effects'
import {
  selectProducts, selectVacuum, selectVortex, selectProductByRFID, updateProduct,
  setProducts, setVacuum, setVortex,
} from './action'
import deviceApi from '../device/service'

// I wish "yield call()" can detect the return type...

function* selectProductsSaga() {
  const { product } = deviceApi
  try {
    const data: Product[] = yield call(product.getProducts)
    yield put(setProducts(data))
  } catch (err) {
  }
}

function* selectProductSaga({ payload } : ReturnType<typeof selectProductByRFID>) {
  const { product: { getProduct } } = deviceApi
  try {
    yield call(getProduct, payload.rfid)
    // TODO: may need to update 'state.device.products'
  } catch (err) {
  }
}

function* updateProductSaga({ payload } : ReturnType<typeof updateProduct>) {
  const { product: { putProduct } } = deviceApi
  const { rfid, command } = payload
  try {
    yield call(putProduct, rfid, command)
  } catch (err) {
  }
}


function* selectVacuumSaga() {
  const { vacuum: { getState, getSetting, getDetectedlevel } } = deviceApi
  try {
    // get all state from backend
    const state: boolean = yield call(getState)
    const setting: number = yield call(getSetting)
    const detectedlevel: number = yield call(getDetectedlevel)
    // set redux state
    yield put(setVacuum({state, setting, detectedlevel}))
  } catch (err) {
  }
}

function* selectVortexSaga() {
  const { vortex: { getState } } = deviceApi
  try {
    const state: boolean = yield call(getState)
    yield put(setVortex({state}))
  } catch (err) {
  }
}


export function* userEffects() {
  yield takeLatest(selectProducts, selectProductsSaga)
  yield takeLatest(selectProductByRFID, selectProductSaga)
  yield takeLatest(updateProduct, updateProductSaga)

  yield takeLatest(selectVacuum, selectVacuumSaga)
  yield takeLatest(selectVortex, selectVortexSaga)
}

const deviceSagas = [
  call(userEffects)
]

export default deviceSagas