const isAuth = (req, res, next) => {
    if(req.isAuthenticated()) {
        next();
    } else {
        const err = new Error();
        err.status = 403;
        err.message = "Forbidden: you're not logged in.";
        next(err);
    }
}

module.exports = isAuth;
