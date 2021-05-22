import axios from 'axios'

// const token = '';

// set default config
const apiClient = axios.create({
  baseURL: 'http://localhost:9998',
  withCredentials: false,
  headers: {
    // 'Authorization': 'Bearer ' + token,
    // 'Content-Type': 'application/json', // let axios decide
  },
  responseType: 'json'
})

// set default error handling
apiClient.interceptors.response.use(
  // 2XX: success
  (res) => res,
  // if server doesn't return 2XX
  (error) => {
    // error.response type is AxiosResponse
    console.error('[API Client]', error, error.response)
    return Promise.reject(error)
  }
)

/**
 * typescript can't detect run time type error.
 * This function outputs error and return false if checker returns false or string.
 */
export const checkType = (data: any, checker: (data: any) => boolean | string) => {
  const result = checker(data)
  if (result === true) return true
  // in case of error, output error message
  const message = result || ''
  console.error('Unexpected type:', checker.name, message, data)
  alert('There was unexpected Type error. Please see console for more detail.')
  return false
}

export default apiClient
