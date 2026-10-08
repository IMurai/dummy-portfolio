import { useState } from 'react';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import FormField from '../../ui/FormField';

const initialForm = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sent

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to a backend / form service (e.g. Formspree, Resend, API route)
    console.info('Transmission payload:', form);
    setStatus('sent');
    setForm(initialForm);
  };

  return (
    <Card as="form" onSubmit={handleSubmit} shadow="red" className="flex flex-col gap-4 p-5">
      <FormField label="Name" name="name" placeholder="e.g. Alex Mercer" value={form.name} onChange={update} required />
      <FormField
        label="Email"
        name="email"
        type="email"
        placeholder="alex@enterprise.corp"
        value={form.email}
        onChange={update}
        required
      />
      <FormField
        label="Message"
        name="message"
        multiline
        rows={4}
        placeholder="Detail system scale, SLA bottlenecks, or target deployment timeline..."
        value={form.message}
        onChange={update}
        required
      />

      <Button type="submit" size="lg" className="w-full">
        Execute transmission →
      </Button>

      {status === 'sent' && (
        <p role="status" className="label text-crimson-soft">
          [OK] Transmission queued. Expect response within 24h.
        </p>
      )}
    </Card>
  );
}
