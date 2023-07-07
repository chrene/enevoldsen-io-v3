import Container from './Container';
import { services } from '../data/services';

export default function Services() {
  return (
    <div>
      <Container>
        <div className="py-32 px-8">
          <h2 className="font-medium text-5xl">Det kan jeg hjælpe med</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {services.map((service) => (
              <div className="bg-white rounded-lg shadow-lg group cursor-pointer">
                <div className="p-8">
                  <div className="flex gap-4 mb-4 flex-col">
                    <div className="mr-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-blue-600">
                      {service.icon}
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="text-lg font-medium transition-transform duration-300 group-hover:-translate-x-0.5">
                        {service.title}
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
