db.voos.count({
  "aeroportoDestino.pais": {
    $nin: ["BRASIL"]
  }
});
