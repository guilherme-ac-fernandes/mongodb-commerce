db.produtos.find(
  { $or: [
    { curtidas: 36 },
    { vendidos: 85 },
  ] },
  {
    nome: true,
    vendidos: true,
    _id: false,
    curtidas: true,
  },
);