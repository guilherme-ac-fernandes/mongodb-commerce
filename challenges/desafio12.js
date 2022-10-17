db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  {
    $addToSet: { ingredientes: "ketchup" },
  },
);
db.produtos.find(
  {},
  {
    nome: true,
    _id: false,
    ingredientes: true,
  },
);