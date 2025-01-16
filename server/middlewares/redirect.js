import {extras} from "../config.js"

const page_redirects = {
    "/invite" : extras.INVITE_URL,
    "/login" : "/api/auth/login",
}


// redirect middleware
export function redirect_pages(req, res, next) {
    if (page_redirects[req.originalUrl]) {
        res.redirect(page_redirects[req.originalUrl]);
    }
    else {
        next();
    }
}