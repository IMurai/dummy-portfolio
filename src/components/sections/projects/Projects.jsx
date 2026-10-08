import { projects } from '../../../data/projects';
import SectionHeading from '../../ui/SectionHeading';
import Section from '../Section';
import ProjectCard from './ProjectCard';

const visibleProjects = projects.filter((project) => !project.hidden);

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading index="03" code="PRODUCTION_DEPLOYMENTS" title="Projects" />
      <div className="grid gap-8 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}
