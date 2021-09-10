db.voos.find({ natureza: "Internacional" },
  { decolagens: 1, _id: 0 }).count();
