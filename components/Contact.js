import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState(false);
  const [submitButtonContent, setSubmitButtonContent] = useState("Send");
  const [message, setMessage] = useState("Get In Touch With Our Tech Familia.");
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitButtonContent(<img src="/static/images/loading.gif" className="h-6 w-auto"/>);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      });

      if (response.ok) {
        setFormStatus(true);
      } else {
        const data = await response.json();
        console.error('Form submission failed:', data.error);
        setSubmitButtonContent("Send");
        setMessage("Message failed to send. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitButtonContent("Send");
      setMessage("Message failed to send. Please try again.");
    }
  };

  if (formStatus) {
    return (
      <section className="w-full h-full md:min-h-screen bg-[url('/static/images/hero.webp')] bg-cover bg-center grid text-white">
        <div className="h-full p-4 bg-orange/80 md:p-16 flex flex-col">
          <div className="flex flex-row gap-x-5 mt-8 md:mt-10 items-center">
            <div className="flex flex-col">
              <h1 className="text-5xl md:text-6xl">SEND US A BYTE OR TWO</h1>
              <h3 className="font-inter text-xl md:text-2xl">Your message has been sent. Chat with you soon!</h3>
            </div>
            <div className="hidden md:block md:w-28">
              <img src="/static/images/hispanic-hackers-icon.webp"/>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="w-full h-full md:min-h-screen bg-[url('/static/images/hero.webp')] bg-cover bg-center grid text-white">
        <div className="h-full p-4 bg-orange/80 md:p-16 flex flex-col">
          <div className="flex flex-row gap-x-5 mt-8 md:mt-10 items-center">
            <div className="flex flex-col">
              <h1 className="text-5xl md:text-6xl">SEND US A BYTE OR TWO</h1>
              <h3 className="font-inter text-xl md:text-2xl">{message}</h3>
            </div>
            <div className="hidden md:block md:w-28">
              <img src="/static/images/hispanic-hackers-icon.webp"/>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="w-full max-w-[800px] md:mt-8 lg:self-center">
            <div className="flex flex-col text-base md:text-lg gap-y-1 my-6 lg:w-2/3">
              <label htmlFor='name'>Your Name:</label>
              <input type='text' name='name' required placeholder='Juan Herrera' className='form-control text-black w-full py-2 px-4 rounded-xl' value={query.name} onChange={handleChange()} />
            </div>
            <div className="flex flex-col text-base md:text-lg gap-y-1 my-6 lg:w-2/3">
              <label htmlFor='email'>Your E-Mail:</label>
              <input type='email' name='email' required placeholder='juanherrera@hispanichackers.org' className='form-control text-black w-full py-2 px-4 rounded-xl' value={query.email} onChange={handleChange()} />
            </div>
            <div className="flex flex-col text-base md:text-lg gap-y-1 my-6">
              <label htmlFor='message'>Message</label>
              <textarea name='message' required placeholder='Message' className='form-control text-black w-full h-28 md:h-40 py-2 px-4 rounded-xl' value={query.message} onChange={handleChange()} />
            </div>
            <button className="mt-4 text-base md:text-lg rounded-lg bg-gradient-to-br to-[#2BFEFF] from-turquoise py-1 px-6 font-medium text-black w-fit hover:scale-110" type="submit">{ submitButtonContent }</button>
          </form>
        </div>
      </section>
    );
  }
}
