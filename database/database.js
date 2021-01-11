require ('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_URL;
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true });


const run = async () => {
    try {
        await client.connect();
        console.log("connection is made");
        const database = client.db('stevenTest');
        const collection = database.collection('notes');

        const query = {name : 'Lucy'};
        const note = await collection.findOne(query);
        console.log(note);
    } finally {
        await client.close(); 
        console.log("connection is closed");          
    }
}

run().catch((error) => {
    console.log(error);
})