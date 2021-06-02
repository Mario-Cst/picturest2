const mongoose = require("mongoose");
//const ObjectId = require("mongoose").Types.ObjectId; //Esto para usar el tipo ObjectId si necesitas usarlo varias veces


const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    pins: Array
    /* following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "pins" 
    }] */
});
//usar .populate en el controlador para sacar los pines --> User.find().populate('pins');

const UserModel = mongoose.model("users", UserSchema);

const create = async (user) => {
    const userCreated = await UserModel.create(user);
    return userCreated;
};

const getAll = async () => {
    const users = await UserModel.find();
    return users;
};

const search = async (query) => {
    const user = await UserModel.findOne(query);
    return user;
};

const getId = async (id) => {
    const user = await UserModel.findById(id).populate('following');
    return user;
};

const update = async (id,newbody) => {
    const user = await UserModel.findByIdAndUpdate(id,newbody,{new:true});
    return user;
};

const deleteId = async (id) => {
    await UserModel.findByIdAndDelete(id);
};

module.exports = {
    create,
    getAll,
    search,
    getId,
    update,
    deleteId
};