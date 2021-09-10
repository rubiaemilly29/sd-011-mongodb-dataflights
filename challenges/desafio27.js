db.resumoVoos.insert({
  empresa: "PASSAREDO", 
  totalVoosDomesticos: db.voos.count(
    {
      natureza: "Doméstica",
      "empresa.nome": "PASSAREDO",
    },
) });

db.resumoVoos.find({ empresa: "PASSAREDO" }, { _id: false }).limit(1);