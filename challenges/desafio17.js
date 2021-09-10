db.voos.find({ natureza: "Doméstica" },
  { decolagens: 1, _id: 0 }).count();
