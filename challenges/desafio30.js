db.produtos.updateOne(
  { nome: "Big Mac" },
  {
    $unset: { curtidas: "" },
  },
);

db.produtos.find(
  {},
  {
    nome: true,
    _id: false,
    curtidas: true,
  },
);