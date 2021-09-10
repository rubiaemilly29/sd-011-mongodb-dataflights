db.voos.find(
  { litrosCombustivel: { $lt: 1000, $exists: true } },
).limit(1);
