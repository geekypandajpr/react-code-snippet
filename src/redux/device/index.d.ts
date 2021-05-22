// undefined means loading
type DeviceState = {
  products?: Product[]
  vacuum?: VacuumState
  vortex?: VortexState
  temperature?: number // in C for now
  fan?: FanState
}

type VacuumState = {
  state: boolean // 'ENABLED' | 'DISABLED'
  setting: number
  detectedlevel: number // is it pressure?
}
type VortexState = {
  state: boolean // 'ENABLED' | 'DISABLED'
}
type FanState = {
  state: boolean
  speed: number
}


interface Product {
  blocked: boolean
  blockedReason: string | null
  dateOfExpiration: number
  dateOfManufacture: number
  enabled: boolean
  flowRate: number
  lotNumber: number
  name: string
  rfid: string
  serumType: string | null
  type: string | null
  volumeCurrent: number
  volumeInitial: number
  volumeUsed: number
}
