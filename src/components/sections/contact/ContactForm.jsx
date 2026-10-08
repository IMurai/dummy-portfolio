import { useState } from 'react';
import { contact } from '../../../data/contact';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import FormField from '../../ui/FormField';

const initialForm = { name: '', email: '', message: '' };

const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
const emailChannel = contact.channels.find((ch) => ch.key === 'Email:');
const toEmail = emailChannel?.value ?? '';

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | mailto | error

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    if (formspreeId) {
      setStatus('sending');
      try {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(form),
        });
        if (res.ok) {
          setForm(initialForm);
          setStatus('sent');
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
      return;
    }

    // No form service configured: hand the message to the visitor's email app.
    const subject = `Project enquiry from ${form.name}`;
    const body = `${form.message}\n\nFrom: ${form.name} <${form.email}>`;
    window.location.href = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('mailto');
  };

  return (
    <Card as="form" onSubmit={handleSubmit} shadow="violet" className="flex flex-col gap-4 p-5">
      <FormField label="Name" name="name" placeholder="Your name" value={form.name} onChange={update} required />
      <FormField
        label="Email"
        name="email"
        type="email"
        placeholder="you@example.com"
        value={form.email}
        onChange={update}
        required
      />
      <FormField
        label="Message"
        name="message"
        multiline
        rows={4}
        placeholder="Tell me about your web or mobile project, timeline, and goals..."
        value={form.message}
        onChange={update}
        required
      />

      <Button type="submit" size="lg" className="w-full">
        {status === 'sending' ? 'Sending...' : 'Send message →'}
      </Button>

      {status === 'sent' && (
        <p role="status" className="label text-crimson-soft">
          [OK] Message sent. I will reply as soon as I can.
        </p>
      )}
      {status === 'mailto' && (
        <p role="status" className="label text-ink/80">
          Opening your email app...
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className="label text-crimson-soft">
          Could not send. Please email me directly at {toEmail}.
        </p>
      )}
    </Card>
  );
}
