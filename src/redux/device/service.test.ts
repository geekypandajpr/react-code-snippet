import api from "../common/api"
import deviceApi, { checkers } from './service'

const {
  product: { getProducts }
} = deviceApi

jest.mock('../common/api')
const mockedApi = api as jest.Mocked<typeof api>


describe('deviceApi', () => {
  describe('product.getProducts', () => {
    it('should return product list from backend', async () => {
      mockedApi.get.mockResolvedValueOnce({data: []}) // expected empty data
      const data = await getProducts()
      // it should return axios { data }
      expect(data).toEqual([])
    })
  })
})

describe('deviceApi checkers', () => {
  const { product, products } = checkers
  describe('product', () => {
    // we can test all fields here
    it('should be Product type', () => {
      expect(product(sample_product)).toBe(true)
      expect(product({})).not.toBe(true)
    })
  })
  describe('products', () => {
    it('should be array of Product', () => {
      expect(products([])).toBe(true)
      expect(products('')).toBe(false)
      expect(products([sample_product])).toBe(true)
    })
  })
})

const sample_product: Product = {
  blocked: false,
  blockedReason: '',
  dateOfExpiration: 123456789,
  dateOfManufacture: 123456789,
  enabled: false,
  flowRate: 13,
  lotNumber: 123456,
  name: 'Some Product',
  rfid: 'rfid1234',
  serumType: '',
  type: '',
  volumeCurrent: 80,
  volumeInitial: 99,
  volumeUsed: 10
}
