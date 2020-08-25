let { getSalt, getHash, checkSaltHash } = require('./index')
let { dbConnect } = require('./db')

// let password = 'MYPASSWORD'
// let salt = getSalt()
// let hash = getHash(password, salt)

// console.log(checkSaltHash(password, salt, hash));

 dbConnect(async client => {
    const database = client.db("admin-mvp");
    const collection = database.collection("users");
    // create a document to be inserted
    const doc = { name: "yyy", password: "123" };
    const result = await collection.insertOne(doc);

    console.log(
        `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
    );
})