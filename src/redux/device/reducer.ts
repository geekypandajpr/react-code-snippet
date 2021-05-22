import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// set undefined 
const initialState: DeviceState = {
  products: undefined,
  vacuum: undefined,
  vortex: undefined,
  temperature: undefined,
  fan: undefined
}

const { actions, reducer } = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload
    },
    setVacuum(state, action: PayloadAction<VacuumState>) {
      state.vacuum = action.payload
    },
    setVortex(state, action: PayloadAction<VortexState>) {
      state.vortex = action.payload
    },
    setTemperature(state, action: PayloadAction<number>) {
      state.temperature = action.payload
    },
    setFan(state, action: PayloadAction<FanState>) {
      state.fan = action.payload
    }
  }
})

export { actions, reducer }
