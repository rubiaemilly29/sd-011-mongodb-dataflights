db.voos.find({
  "aeroportoDestino.pais": {
    $nin: ["BRASIL", "ÁSIA", "OCEANIA"],
  },
}).count();
