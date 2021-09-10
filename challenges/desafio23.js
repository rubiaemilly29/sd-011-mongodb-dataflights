db.voos.findOne(
  { litrosCombustivel: { $lte: 1000, $exists: true } },
  { vooId: true, _id: false, litrosCombustivel: true },
);