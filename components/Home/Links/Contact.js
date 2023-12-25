import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch('https://getform.io/f/081b0ea6-ae9f-4606-bde1-351e0726a78b', {
      method: 'POST',
      body: formData,
    })
      .then(() => setQuery({ name: '', email: '', message: '' }))
      .then(() => setFormStatus(true));
  };

  if (formStatus) {
    return (
      <div id='contact'>
        <h1>Contact Us</h1>
        <hr />
        <h3>Thanks for your message!</h3>
      </div>
    );
  } else {
    return (
      <div id='contact'>
        <h1>Contact Us</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name' />
            <input
              type='text'
              name='name'
              required
              placeholder='Name'
              className='form-control'
              value={query.name}
              onChange={handleChange()}
            />
          </div>
          <div>
            <label htmlFor='email' />
            <input
              type='email'
              name='email'
              required
              placeholder='Email'
              className='form-control'
              value={query.email}
              onChange={handleChange()}
            />
          </div>
          <div>
            <label htmlFor='message' />
            <textarea
              name='message'
              required
              placeholder='Message'
              className='form-control'
              value={query.message}
              onChange={handleChange()}
            />
          </div>
          <button type='submit'>Send</button>
        </form>
      </div>
    );
  }
}
