import { projects } from '../../../data/projects';
import SectionHeading from '../../ui/SectionHeading';
import Section from '../Section';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading index="03" code="PRODUCTION_DEPLOYMENTS" title="Projects" />
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map(({ ref, ...project }) => (
          <ProjectCard key={ref} refId={ref} {...project} />
        ))}
      </div>
    </Section>
  );
}
