const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://abrambagus_db_user:Le8JaOB7qFK7b175@cluster0.d1jikx7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((result) => {
      console.log("Connected to MongoDB");
      callback(result);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
