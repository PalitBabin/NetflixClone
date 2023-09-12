import User from "../model/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const saltRounds = 10;

//REGISTRATION
export const registerUser = async (req, res) => {

    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, saltRounds)
        });
        await newUser.save();
        res.status(200).json(newUser);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

//LOGIN
export const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(401).json("Wrong username or password!");
        } else {
            const match = await bcrypt.compare(req.body.password, user.password);
            if (!match) {
                res.status(401).json("Wrong username or password!")
            } else {
                const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.ACCESS_SECRET_KEY, { expiresIn: "15m" });

                const { password, ...info } = user._doc;
                res.status(200).json({...info,accessToken});
            }
        }
    } catch (err) {
        res.status(500).json(err.message);
    }
}