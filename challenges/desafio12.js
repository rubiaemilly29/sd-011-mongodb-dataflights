db.voos.find(
  {
    "aeroportoDestino.pais": 
    { 
      $in: 
      ["CHILE", "ARGENTINA", "BRASIL"],
    },
  },
).count();
