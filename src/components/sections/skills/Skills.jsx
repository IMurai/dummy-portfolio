import { subsystems } from '../../../data/skills';
import SectionHeading from '../../ui/SectionHeading';
import Section from '../Section';
import PrimarySkillCard from './PrimarySkillCard';
import SubsystemCard from './SubsystemCard';

export default function Skills() {
  return (
    <Section id="skills" className="bg-void">
      <SectionHeading index="02" code="ARCHITECTURE_CAPABILITIES" title="Skills" />
      <PrimarySkillCard />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {subsystems.map((sub) => (
          <SubsystemCard key={sub.id} {...sub} />
        ))}
      </div>
    </Section>
  );
}
