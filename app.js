const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://CC6005-00:${mongoDBPassword}@cluster0.lpfnqqx.mongodb.net/Francis-Posts?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("test").collection("users");
  
  client.close();
});