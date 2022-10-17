db.produtos.updateMany(
  {},
  { $pull: { ingredientes: "cebola" } },
);

db.produtos.find({}, {
  nome: true,
  _id: false,
  ingredientes: true,
});
