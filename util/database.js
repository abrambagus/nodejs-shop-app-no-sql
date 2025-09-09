const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://abrambagus_db_user:Le8JaOB7qFK7b175@cluster0.d1jikx7.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((result) => {
      console.log("Connected to MongoDB");
      _db = result.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
