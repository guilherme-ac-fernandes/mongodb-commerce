db.produtos.updateMany(
  { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
  { $push: { ingredientes: "bacon" } },
);

db.produtos.find({}, {
  nome: true,
  _id: false,
  ingredientes: true,
});
