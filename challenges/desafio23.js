db.voos.findOne({ $and: 
  [
  { litrosCombustivel: { $lte: 1000 } },
  { litrosCombustivel : { $exists: true } },
  ] }, { vooId: 1, _id: 0, litrosCombustivel: 1 });
