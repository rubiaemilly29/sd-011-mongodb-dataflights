// 5 - Retorne o vooId do décimo ao décimo segundo documento da coleção voos.
db.voos.find({}, { vooId: true, id: false }).limit(3).skip(9);
