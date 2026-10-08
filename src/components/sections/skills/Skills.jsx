import { primarySkills, subsystems } from '../../../data/skills';
import SectionHeading from '../../ui/SectionHeading';
import Section from '../Section';
import PrimarySkillCard from './PrimarySkillCard';
import SubsystemCard from './SubsystemCard';

export default function Skills() {
  return (
    <Section id="skills" className="bg-void">
      <SectionHeading index="02" code="STACK_CAPABILITIES" title="Skills" />

      <div className="grid gap-6 lg:grid-cols-2">
        {primarySkills.map((skill) => (
          <PrimarySkillCard
            key={skill.title}
            skill={skill}
          />
        ))}
      </div>

      <div className="mt-10">
        <h3 className="label mb-4 text-violet-soft">Also comfortable with</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {subsystems.map((sub) => (
            <SubsystemCard key={sub.id} {...sub} />
          ))}
        </div>
      </div>
    </Section>
  );
}
