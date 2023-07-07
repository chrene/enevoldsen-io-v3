import Container from "./Container";

export default function Work() {
  return (
    <section id="work">
      <Container>
        <div className="py-32 px-8">
          <h2 className="font-medium text-5xl">Det har jeg lavet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-8"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
