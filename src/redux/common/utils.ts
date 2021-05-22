export const UrlUtils = {
  buildURL: (url: string, queryParams: any) => {
    return url.concat(url, "?", Object.keys(queryParams).map(key => key + '=' + queryParams[key]).join('&'))
  }
}
