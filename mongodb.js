const { MongoClient } = require('mongodb');

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";

async function main() {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("Connected to MongoDB");

    // Specify the database to use
    const database = client.db('testDatabase');
    const collection = database.collection('testCollection');

    // Insert a sample document into the collection
    const sampleDocument = { name: "Sample Document", value: 42 };
    // const data = { name: "Another Sample Document", value: 100 };
    await collection.insertOne(sampleDocument);
    console.log('Sample document inserted:', sampleDocument);

    // Query the database (e.g., find all documents)
    const documents = await collection.find({}).toArray();
    console.log('Documents found:', documents);
  } catch (err) {
    console.error(err);
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

main().catch(console.error);
