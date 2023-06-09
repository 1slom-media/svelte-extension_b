import jwt from '../lib/jwt.js'


export default (req, res, next) => {
    try {
        if (req.url != "/register" && req.url != "/login") {
          const token = req.headers.token;
          if (!token) throw new Error("token required");
          jwt.verify(token);
        }
        return next();
    } catch (error) {
        res.status(401).json({
            status: 401,
            message: error.message
        })
    }
}