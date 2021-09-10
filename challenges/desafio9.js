db.voos.count({ $and: [{ ano: { $gte: 2016 } }, { ano: { $lte: 2017 } }] });
