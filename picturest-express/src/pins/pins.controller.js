const pinModel = require("./pins.model");

const all = async (req, res) => {
  const pins = await pinModel.getAll();
  res.json(pins);
};

const create = async (req, res) => {
  const pin = await pinModel.create(req.body);
  res.status(201).json(pin);
};

const get = async (req, res) => {
  const id = req.params.id; //se hace así cuando quieres usar un parámetro con un nombre determinado que has puesto en la ruta (en este caso id)
  const pin = await pinModel.getId(id);
  res.status(201).json(pin);
};

const update = async (req, res) => {
  const id = req.params.id;
  const pin = await pinModel.update(id,req.body);
  res.status(201).json(pin);
};

const remove = async (req, res) => {
  const id = req.params.id;
  await pinModel.deleteId(id);
  res.status(201).json("Successfully deleted, execute get to check it")
};

module.exports = {
  all,
  create,
  get,
  update,
  remove,
};