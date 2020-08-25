const { MongoClient } = require("mongodb");
const client = new MongoClient( "mongodb://127.0.0.1:27017/?poolSize=20&w=majority");

async function dbConnect(cb) {
    try {
        await client.connect();
        const database = client.db("admin-mvp");
        const collection = database.collection("users");

        cb && cb(collection)
    } catch (e) {
        console.dir(e)
    } finally {
        await client.close();
    }
}

module.exports = dbConnect