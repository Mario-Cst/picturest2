const UserModel = require("../users/users.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
    const user = await UserModel.search({
        email: req.body.email,//Pide el email
    })
    if (user) {
        const result = await bcrypt.compare(req.body.password, user.password);
            if (result) {
                const token = jwt.sign({id: user._id}, process.env.TOKEN_SECRET);
                return res.json(token);
            } else {
                return res.status(401).json("wrong email o password")
            }
    }
    return res.status(401).json('wrong email o password');
}
    


module.exports= {login};
