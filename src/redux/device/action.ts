import { createAction } from '@reduxjs/toolkit'
import { actions } from './reducer'

// most "select" actions don't have payload
export const selectProducts = createAction('device/selectProducts')
export const selectVacuum = createAction('device/selectVacuum')
export const selectVortex = createAction('device/selectVortex')
export const selectTemperature = createAction('device/selectTemperature')
export const selectFan = createAction('device/selectFan')
export const selectProductByRFID = createAction('device/selectProduct/rfid',
  (rfid: string) => ({ payload: { rfid } })
)


// enable or disable product
export const updateProduct = createAction('device/updateProduct',
  (rfid: string, command: 'enable' | 'disable') => ({ payload: { rfid, command } })
)
export const updateVacuum = createAction('device/updateVacuum',
  (payload: 'increment' | 'decrement' | 'enable' | 'disable' | 'toggle') => ({ payload })
)
export const updateVortex = createAction('device/updateVortex',
  (payload: 'enable' | 'disable') => ({ payload })
)


// pick actions created by createSlice
export const {
  setProducts,
  setVacuum,
  setVortex,
  setTemperature,
  setFan,
} = actions
