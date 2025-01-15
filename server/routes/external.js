import e from "express";


const extRoute = e.Router()

const redirects = {
    "/support": "https://discord.gg/spruce",
}

extRoute.get("/:route", (req, res) => {
    const route = req.params.route
    if (redirects[route]) {
        res.redirect(redirects[route])
    } else {
        res.status(404).send("Not Found")
    }
});