db.voos.find(
  {
    "aeroportoDestino.continente": 
    { 
      $nin: 
      ["OCEANIA", "ÁSIA", "EUROPA"],
    },
  },
).count();
