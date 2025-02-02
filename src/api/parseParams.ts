export const parseParams = (url: string, params: object) => {
    const queryParams = []

    for (const key in params) {
        const value = params[key]

        if (Array.isArray(value)) {
            value.forEach((item) => {
                queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(item)}`)
            })
        } else {
            queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        }
    }
    return url + `?${queryParams.join("&")}`
}
