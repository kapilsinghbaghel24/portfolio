import { FC, memo, useCallback, useMemo, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const formRef:any = useRef(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')
  const [name, setName] = useState('');
 


  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      
      emailjs.sendForm(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, formRef.current, `${process.env.NEXT_PUBLIC_KEY}`)
      .then((result)=>{
        setEmail('');
        setName('');
        setMessage('');
      })
      .catch((err)=>console.log(err));
    },
  []
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form ref={formRef} className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="from_name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="from_email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
