

export const getCookie = (req, name='token') => {
    return RegExp(`${name}=(.*?);`).exec(req.headers.cookie)[1]
}