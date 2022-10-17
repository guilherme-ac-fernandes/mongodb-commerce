db.produtos.find(
  { ingredientes: { $all: ["picles"] } },
  {
    nome: true,
    _id: false,
    ingredientes: true,
    valoresNutricionais: { $slice: 3 },
  },
);