db.voos.deleteMany(
  {
    $and:
      [
        { "empresa.sigla": "GLO" },
        { "passageiros.pagos": { $gte: 5, $lte: 10 } },
      ],
  },
);
