// pages/api/submitForm.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
  
      try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);
  
        const response = await fetch(process.env.GETFORM, {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          res.status(200).json({ success: true });
        } else {
          const data = await response.json();
          res.status(response.status).json({ error: data.error });
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }
  