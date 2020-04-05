const queryString = (params) => {
  return Object.keys(params)
    .map((key) => {
      return key + "=" + params[key]
    })
    .join("&")
}

export default queryString
