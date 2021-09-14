// Retorne apenas os campos empresa.sigla, empresa.nome e passageiros do voo com o campo vooId igual a 756807

db.voos.find({}, { vooId: 1, _id: 0 }).limit(3).skip(9);