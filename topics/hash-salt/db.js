const { MongoClient } = require("mongodb");

class DBConnection{
     constructor(){
        this.client = new MongoClient( "mongodb://127.0.0.1:27017/?poolSize=20&w=majority");
        this.client.connect().then(() => {
            this.database = this.client.db("admin-mvp");
            this.collection = this.database.collection("users");
        })
    }
}

module.exports = new DBConnection()