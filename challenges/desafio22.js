db.produtos.updateMany(
  {},
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
);

db.produtos.updateOne(
  { nome: "Big Mac" },
  { $inc: { "vendasPorDia.3": 60 } },
);

db.produtos.updateOne(
  { tags: { $all: ["bovino"] } },
  { $inc: { "vendasPorDia.6": 120 } },
);

db.produtos.find({}, {
  nome: true,
  _id: false,
  vendasPorDia: true,
});