db.produtos.updateOne(
  { nome: "Cheddar McMelt" },
  { $pop: { ingredientes: 1 } },
);

db.produtos.find({}, {
  nome: true,
  _id: false,
  ingredientes: true,
});
