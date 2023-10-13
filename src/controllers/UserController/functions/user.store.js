module.exports.createNewUser = async (req, res) => {
  console.log(req.body);
  return res.status(200).send({ message: "Hello World!" });
};
