db.voos.find(
  { litrosCombustivel: { $gte: 1000 } },
).limit(1);
