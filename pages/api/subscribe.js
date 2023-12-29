import { connectToDatabase } from './MongoDB.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, fname, lname } = req.body;

    try {
      const db = await connectToDatabase();
      const collection = db.collection(process.env.COLLECTION);

      // Check if the email already exists
      const existingSubscriber = await collection.findOne({ email });

      if (existingSubscriber) {
        return res.status(400).json({ error: 'Email already subscribed', code: 111, email: email });
      }

      // Insert new subscriber
      await collection.insertOne({ email, fname, lname });
      return res.status(200).json({ message: 'Subscription successful', email: email });
    } catch (err) {
      console.error('Error processing subscription:', err);
      return res.status(500).json({ error: 'Internal server error', code: 222, email: email });
    }
  }

  return res.status(405).end(); // Method Not Allowed
}
