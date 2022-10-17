db.produtos.updateMany(
  { "valoresNutricionais.2.percentual": { $gte: 40 } },
  { $push: { tags: "muito sódio" } },
);

db.produtos.find({}, {
  nome: true,
  _id: false,
  tags: true,
});
