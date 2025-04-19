import { extras } from "../config.js"


const page_redirects = new Map(
    [
        ["/invite", extras.INVITE_URL],
        ["/login", "/api/auth/login"],
    ]
)


/**
 * Middleware that checks if a redirect exists for the current request URL.
 *
 * This function examines the incoming request's original URL against
 * a mapping object (page_redirects) and, if a matching redirect is found,
 * sends an HTTP redirect response. Otherwise, it passes control to the
 * next middleware in the stack.
 *
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {Function} next - The callback to pass control to the next middleware.
 * @returns {*} - Returns the result of res.redirect() if a redirect is issued, or calls next() to continue processing.
 */
export function redirect_pages(req, res, next) {
    const redirect = page_redirects.get(req.originalUrl)
    redirect ? res.redirect(redirect) : next();
}