db.voos.find({ decolagens: { $gt: 20 } },
  { decolagens: 1, _id: 0 }).count();
