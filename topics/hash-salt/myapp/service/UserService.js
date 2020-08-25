let dbConnect = require('../../db')
let { getSalt, getHash, checkSaltHash } = require('../../saltHash')

function addUser(username, password) {
    dbConnect(async (collection) => {
        let userId = getSalt()
        let salt = getSalt()
        let hash = getHash(password, salt)
        const doc = { id: userId, name: username, salt, hash };
        const result = await collection.insertOne(doc);

        console.log(
            `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
        );
    })
}

function deleteUser(userId) {
    dbConnect(async (collection) => {
        const query = { id: userId };

        const result = await collection.deleteOne(query);
        if (result.deletedCount === 1) {
            console.dir("Successfully deleted one document.");
        } else {
            console.log("No documents matched the query. Deleted 0 documents.");
        }
    })
}

function getAllUsers() {
    dbConnect(async (collection) => {

        const query = { runtime: { $lt: 15 } };

        const options = {
            // sort returned documents in ascending order by title (A->Z)
            sort: { title: 1 },
            // Include only the `title` and `imdb` fields in each returned document
            projection: { _id: 0, title: 1, imdb: 1 },
        };

        const cursor = collection.find();

        // print a message if no documents were found
        if ((await cursor.count()) === 0) {
            console.log("No documents found!");
        }

        await cursor.forEach(console.dir);
    })
}

module.exports = {
    addUser,
    deleteUser,
    getAllUsers
}