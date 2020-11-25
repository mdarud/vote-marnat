var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VoteMaranatha");
  var myobj = { name: "Daru", email: "darudarmakusuma@gmail.com", nrp: "13518057", token: "aaaaa", status: "mahasiswa", unit: "non", memilih: false };
  dbo.collection("users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});