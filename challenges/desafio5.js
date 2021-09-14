db.voos.find({}, { _id: 0, vooId: 1 }).limit(3).skip(9).pretty();

// Traz o vooId (1), mas não traz o id (0)
