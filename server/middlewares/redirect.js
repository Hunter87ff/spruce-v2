import {INVITE_URL} from "../config.js"

const page_redirects = {
    "/invite" : INVITE_URL,
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