import { connectToDatabase } from './MongoDB.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const db = await connectToDatabase();
      const collection = db.collection(process.env.COLLECTION);

      // Check if the email already exists
      const existingSubscriber = await collection.findOne({ email });

      if (!existingSubscriber) {
        return res.status(400).json({ error: 'Email not subscribed', code: 111, email: email });
      }

      // Insert new subscriber
      const result = await collection.deleteOne({ email });
      if (result.deletedCount === 1) {
        return res.status(200).json({ message: 'Deletion successful', email: email });
      } else {
        return res.status(404).json({ error: 'Email not found', code:111, email: email });
      }
    } catch (err) {
      console.error('Error processing unsubscription:', err);
      return res.status(500).json({ error: 'Internal server error', code: 222, email: email });
    }
  }

  return res.status(405).end(); // Method Not Allowed
}
