import Container from './Container';
import { projects } from '../data/projects';

export default function Work() {
  return (
    <div>
      <Container>
        <div className="py-32 px-8">
          <h2 className="font-medium text-5xl">Det har jeg lavet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-8">
                {projects.map((project) => (
                  <div key={project.title}>{project.title}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
