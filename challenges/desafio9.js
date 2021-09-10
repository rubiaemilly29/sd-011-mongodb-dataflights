db.voos.count({ $and: [{ ano: { $gt: 2017 } }, { ano: { $lt: 2018 } }] });
