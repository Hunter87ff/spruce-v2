

export const getCookie = (req, name='token') => {
    return req.headers.cookie.match(/token=(.*?);/)[1]
}

