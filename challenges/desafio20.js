db.voos.find({ rtk: { $exists: false } }, { vooId: 1, _id: 0 }).sort().limit(1);
