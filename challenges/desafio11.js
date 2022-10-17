db.produtos.find(
  { nome: { $nin: ["Big Mac", "McChicken"] } },
  {
    nome: true,
    _id: false,
    curtidas: true,
    vendidos: true,
  },
);
