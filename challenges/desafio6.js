db.produtos.find(
  { curtidas: { $gt: 10, $lt: 100 } },
  {
    nome: true,
    _id: false,
    curtidas: true,
  },
);