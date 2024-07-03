
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sathish:oFfdA8ZIBc8Dr8xO@cluster0.nqwkjhs.mongodb.net/?appName=cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);

const mongoConnect = callback => {
    MongoClient.connect(uri)
        .then(client => {
            console.log('You successfully connected to MongoDB!');
            callback(client);
        })
        .catch(error => {
            console.log({ error });
        });
};

module.exports = mongoConnect;
