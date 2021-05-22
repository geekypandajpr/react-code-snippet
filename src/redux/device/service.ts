import api, { checkType } from "../common/api"

// convert response to local state (API reducer)
const deviceApi = {
  product : {
    getProducts: async () => {
      const { data } = await api.get<Product[]>('/device/products')
      checkType(data, checkers.products)
      return data
    },
    getProduct : async (rfid : string) => {
      const { data } = await api.get<Product | null>('/device/product/' + rfid).catch(() => {
        // if rfid is not found, it returns 417 error
        return { data: undefined }
      })
      if (data) checkType(data, checkers.product)
      return data
    },
    putProduct : async (rfid : string, command: 'enable' | 'disable') => {
      // successful response is empty data with 200.
      await api.put('/device/product/' + rfid, null, {params: {command}})
    }
  },
  vacuum: {
    getState: async () => {
      const { data } = await api.get<'ENABLED' | 'DISABLED'>('/device/vacuum/state')
      checkType(data, checkers.state)
      return (data === 'ENABLED') ? true : false
    },
    getSetting: async () => {
      const { data } = await api.get<number>('/device/vacuum/setting')
      return data
    },
    getDetectedlevel: async () => {
      const { data } = await api.get<number>('/device/vacuum/detectedlevel')
      return data
    },
    put: async (command: 'enable' | 'disable' | 'toggle') => {
      await api.put('/device/vacuum', null, {params: {command}})
    },
    post: async (command: 'increment' | 'decrement') => {
      await api.post('/device/vacuum', null, {params: {command}})
    }
  },
  vortex: {
    getState: async () => {
      const { data } = await api.get<'ENABLED' | 'DISABLED'>('/device/vortex2/state')
      checkType(data, checkers.state)
      return (data === 'ENABLED') ? true : false
    }
  }
}


// Type Checkers (export for unit test)
export const checkers = {
  product: (data: any) => {
    // check some columns
    let message = ''
    if (typeof data.enabled !== 'boolean') message += '"enabled" must be boolean.\r\n'
    if (typeof data.blocked !== 'boolean') message += '"blocked" must be boolean.\r\n'
    // TODO: add some more columns
    if (message === '') return true
    return message
  },
  products: (data: any) => {
    // must be array
    if (!Array.isArray(data)) return false
    // each must be product (check until first error is found)
    data.some(line => checkType(line, checkers.product) !== true)
    return true
  },
  state: (data: any) => (['ENABLED', 'DISABLED'].includes(data))
}


export default deviceApi
