import SectionHeading from '../../ui/SectionHeading';
import Section from '../Section';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function Contact() {
  return (
    <Section id="contact" className="bg-void">
      <SectionHeading index="04" code="DIRECT_TRANSMISSION" title="Contact" />
      <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
        <ContactInfo />
        <ContactForm />
      </div>
    </Section>
  );
}
