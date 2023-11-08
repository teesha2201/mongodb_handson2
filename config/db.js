const {MongoClient} = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const MongoServer = new MongoClient(url)

const connection = async () => {
  try {
    await MongoServer.connect();
    console.log("connection is successfully done");
  } catch (err) {
    console.log("Error in connect DataBase", err);
  }
};

connection();

const database = MongoServer.db("humanResources")  


module.exports = { connection, database };