const { MongoClient } = require("mongodb");
const client = new MongoClient( "mongodb://127.0.0.1:27017/?poolSize=20&w=majority");

async function dbConnect(cb) {
    try {
        await client.connect();

        // const database = client.db("admin-mvp");
        // const collection = database.collection("users");
        // // create a document to be inserted
        // const doc = { name: "Red", town: "kanto" };
        // const result = await collection.insertOne(doc);

        // console.log(
        //     `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
        // );

        cb && cb(client)
    } catch (e) {
        console.dir(e)
    } finally {
        await client.close();
    }
}

module.exports = {
    dbConnect
}