db.produtos.updateOne(
  { nome: "Quarteirão com Queijo" },
  { $pop: { ingredientes: -1 } },
);

db.produtos.find({}, {
  nome: true,
  _id: false,
  ingredientes: true,
});