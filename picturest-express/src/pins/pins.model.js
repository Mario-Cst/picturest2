const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema({
  name: String,
  urlImg: String,
});

const PinModel = mongoose.model("pins", PinSchema);

const create = async (pin) => {
  const pinCreated = await PinModel.create(pin);
  return pinCreated;
};

const getAll = async () => {
  const pins = await PinModel.find();
  return pins;
};

const getId = async (id) => {
  const pin = await PinModel.findById(id);
  return pin;
}

const update = async (id,newbody) => {
  const pin = await PinModel.findByIdAndUpdate(id,newbody,{new:true});
  return pin;
}

const deleteId = async (id) => {
  await PinModel.findByIdAndDelete(id);
}

module.exports = {
  create,
  getAll,
  getId,
  update,
  deleteId
};