db.voos.find(
  { rtk: { $not: { $exists: true } } },
).limit(1);
