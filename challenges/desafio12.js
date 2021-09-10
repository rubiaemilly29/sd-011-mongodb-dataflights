db.voos.find({ 
$and: [{ "aeroportoDestino.pais": { $eq: "BRASIL", $eq: "ARGENTINA", $eq: "CHILE" }} ] }).count();