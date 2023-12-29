const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function connectToDatabase() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    //await client.db("users").command({ ping: 1 });
    //console.log("Pinged your deployment. You successfully connected to MongoDB!");
    console.log('Connected to MongoDB');
    return client.db(process.env.DB); // Return the database instance
  } catch (err) {
    await client.close();
    console.error('Error connecting to MongoDB:', err);
    throw err;
  } /*finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  } */
}
connectToDatabase().catch(console.dir);

module.exports = { connectToDatabase };