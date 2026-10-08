import SectionHeading from '../../ui/SectionHeading';
import Section from '../Section';
import BioCard from './BioCard';
import ManifestTerminal from './ManifestTerminal';

export default function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" code="BIO_SPECIFICATION" title="About Me" />
      <div className="grid gap-8 lg:grid-cols-2">
        <ManifestTerminal />
        <BioCard />
      </div>
    </Section>
  );
}
