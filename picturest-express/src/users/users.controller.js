const UserModel = require("./users.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const all = async (req, res) => {
    const users = await UserModel.getAll();
    res.json(users);
};

const create = async (req, res) => {
    const salt = bcrypt.genSaltSync(10); //Salt para hashear el passsword

    const user = await UserModel.create({
        email: req.body.email,
        name: req.body.name,
        password: bcrypt.hashSync(req.body.password, salt)
    });
    const token = jwt.sign({id: user._id}, process.env.TOKEN_SECRET);
                
    res.status(201).json(token); //TODO return token instaned
};

const get = async (req, res) => {
    const id = req.params.id; //se hace así cuando quieres usar un parámetro con un nombre determinado que has puesto en la ruta (en este caso id)
    const user = await UserModel.getId(id);
    res.status(201).json(user);
};

const update = async (req, res) => {
    const id = req.params.id;
    const user = await UserModel.update(id,req.body);
    res.status(201).json(user);
};

const remove = async (req, res) => {
    const id = req.params.id;
    await UserModel.deleteId(id);
    res.status(201).json("Successfully deleted, execute get to check it")
};

module.exports = {
    all,
    create,
    get,
    update,
    remove,
};