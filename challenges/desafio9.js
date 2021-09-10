db.voos.count({
    $and: [
        { ano: { $lte: 2018 } },
        { ano: { $gte: 2017 } },
    ],
});