let db = require('../../db')
let { getSalt, getHash, checkSaltHash } = require('../../saltHash')

async function addUser(username, password) {
    let userId = getSalt()
    let salt = getSalt()
    let hash = getHash(password, salt)
    const doc = { id: userId, name: username, salt, hash };
    const result = await db.collection.insertOne(doc);

    console.log(
        `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
    );
}

async function deleteUser(userId) {
    const query = { id: userId };

    const result = await db.collection.deleteOne(query);
    if (result.deletedCount === 1) {
        console.dir("Successfully deleted one document.");
    } else {
        console.log("No documents matched the query. Deleted 0 documents.");
    }
}

async function deleteAllUser(userId) {
    const query = { id: userId };

    const result = await db.collection.drop();
    if (result.deletedCount === 1) {
        console.dir("Successfully deleted one document.");
    } else {
        console.log("No documents matched the query. Deleted 0 documents.");
    }
}

async function getAllUsers() {
    const query = { runtime: { $lt: 15 } };
    const options = {
        sort: { title: 1 },
        projection: { _id: 0, title: 1, imdb: 1 },
    };

    const cursor = db.collection.find();

    if ((await cursor.count()) === 0) {
        console.log("No documents found!");
    }

    await cursor.forEach(console.dir);
}

module.exports = {
    addUser,
    deleteUser,
    deleteAllUser,
    getAllUsers
}