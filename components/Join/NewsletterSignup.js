import { useState } from "react";
import { useRouter } from "next/router";

/** Set to true when the newsletter / subscribe API is active again. */
export const NEWSLETTER_ACTIVE = false;

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [signupStatus, setSignupStatus] = useState("Sign Up for The Monthly Hack");
  const [submitButtonContent, setSubmitButtonContent] = useState("Join Us");
  const router = useRouter();

  const onchange = (e) => {
    if (e.target.name == "firstname") setFname(e.target.value);
    if (e.target.name == "lastname") setLname(e.target.value);
    if (e.target.name == "email") setEmail(e.target.value);
  };

  const handleUnsubscribe = async (e) => {
    e.preventDefault();
    var unsubscribe = e.target.dataset.email;

    if (unsubscribe) {
      setSubmitButtonContent(<img src="/static/images/loading.gif" className="h-6 w-auto"/>);
      try {
        const response = await fetch('/api/unsubscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Unsubscribe successful');
            router.replace('/unsubscribed');
        } else {
          const data = await response.json();
          if (error.code == 111) setSignupStatus(<p>The email you've attempted to unsubscribe does not exist.</p>);
          else setSignupStatus(<>Failed to unsubscribe. <form data-email={data.email} onSubmit={handleUnsubscribe}><button className="text-cyan hover:text-turquoise underline hover:no-underline" type="submit">Try Again</button>.</form></>);
          document.querySelector('button').classList.add("bg-gradient-to-br");
          setSubmitButtonContent("Join Us");
        }
      } catch (error) {
        console.error('Error submitting subscription:', error);
        document.querySelector('button').classList.add("bg-gradient-to-br");
        setSignupStatus(<p>Failed to unsubscribe.</p>);
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fname && lname && email) {
      setSubmitButtonContent(<img src="/static/images/loading.gif" className="h-6 w-auto"/>);
      try {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, fname, lname }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Subscription successful');
          setSignupStatus(<>You have signed up for our monthly newsletters. Welcome to our community! <form data-email={data.email} onSubmit={handleUnsubscribe}><button className="text-cyan hover:text-turquoise underline hover:no-underline" type="submit">Undo</button>.</form></>);
          setFname("");
          setLname("");
          setEmail("");
          setSubmitButtonContent("Join Us");
        } else {
          const data = await response.json();
          console.error('Subscription failed:', data.error);
          if (data.code == 111) setSignupStatus(<>The provided email is already subscribed. <form data-email={data.email} onSubmit={handleUnsubscribe}><button className="text-cyan hover:text-turquoise underline hover:no-underline" type="submit">Unsubscribe</button>.</form></>);
          else setSignupStatus("There was an error registering you for our monthly newsletter. Please try again.");
          document.querySelector('button').classList.add("bg-gradient-to-br");
          setSubmitButtonContent("Join Us");
        }
      } catch (error) {
        console.error('Error submitting subscription:', error);
        setSignupStatus("There was an error registering you for our monthly newsletter. Please try again.");
        document.querySelector('button').classList.add("bg-gradient-to-br");
        setSubmitButtonContent("Join Us");
      }
    }
  };

  return (
    <>
      <h2 className="text-2xl md:text-3xl">Stay Up To Date With Your Comunidad!</h2>
      <div className="text-xl md:text-2xl font-light">{signupStatus}</div>
      <form className="my-6 flex-col flex md:flex-row gap-3 h-fit" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 h-fit">
          <div className="flex flex-row gap-2">
            <label htmlFor="firstname" className="w-[120px] md:w-[135px] text-base md:text-lg text-cyan text-end">Your First Name:</label>
            <input className="w-fit max-w-52 rounded-[10px] pl-3 border-turquoise border-2 text-black text-base placeholder:text-sm placeholder:font-medium md:w-64 md:text-lg md:placeholder:text-lg" type="text" name="firstname" value={fname} onChange={onchange} placeholder="Juan"/>
          </div>
          <div className="flex flex-row gap-2">
            <label htmlFor="lastname" className="w-[120px] md:w-[135px] text-base md:text-lg text-cyan text-end">Your Last Name:</label>
            <input className="w-fit max-w-52 rounded-[10px] pl-3 border-turquoise border-2 text-black text-base placeholder:text-sm placeholder:font-medium md:w-64 md:text-lg md:placeholder:text-lg" type="text" name="lastname" value={lname} onChange={onchange} placeholder="Herrera"/>
          </div>
          <div className="flex flex-row gap-2">
            <label htmlFor="email" className="w-[120px] md:w-[135px] text-base md:text-lg text-cyan text-end">Your Email:</label>
            <input className="w-fit max-w-52 rounded-[10px] pl-3 border-turquoise border-2 text-black text-base placeholder:text-sm placeholder:font-medium md:w-64 md:text-lg md:placeholder:text-lg" type="email" name="email" value={email} onChange={onchange} placeholder="juanherrera@gmail.com"/>
          </div>
        </div>
        <button className={`m-0 rounded-lg bg-gradient-to-br from-turquoise to-[#2BFEFF] h-fit py-1 md:py-2 px-3 font-medium text-black text-md w-fit border-white border-3 hover:from-white hover:to-white hover:border-turquoise self-end`} type="submit">{submitButtonContent}</button>
      </form>
      <p className="mb-7 text-xl md:text-2xl font-light">We send out monthly newsletters with innovator resources and events happening in Austin and beyond.</p>
    </>
  );
}
