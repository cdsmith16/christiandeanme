import type { ProjectLink as ProjectLinkType } from '@/lib/types';

type Props = {
  link: ProjectLinkType;
};

export default function ProjectLink({ link }: Props) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer noopener"
      className="project-link font-medium text-teal hover:text-forest"
    >
      {link.text}
    </a>
  );
}
