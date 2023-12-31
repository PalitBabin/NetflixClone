import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ msg: "You are not authenticated!" });
    } else {
        jwt.verify(token, process.env.ACCESS_SECRET_KEY, (err, user) => {
            if (err) {
                return res.status(403).json({ msg: "Invalid token!" });
            } else {
                req.user = user;
                next();
            }
        });
    }
};
