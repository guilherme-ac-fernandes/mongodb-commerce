db.resumoProdutos.insertOne(
  { franquia: "McDonalds", totalProdutos: 5 },
);

db.resumoProdutos.find({}, {
  franquia: true, totalProdutos: true, _id: false,
});
