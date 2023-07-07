import Container from "./Container";
import NarrowContainer from "./NarrowContainer";

export default function Hero() {
  return (
    <div className="bg-teal-50">
      <Container>
        <NarrowContainer>
          <div className="py-32 px-8">
            <h1 className="text-5xl font-bold leading-snug md:text-6xl md:leading-snug animate-fade-in-blur opacity-0 origin-bottom">
              Christian Enevoldsen
              <br />
              Freelance Fullstack udvikler
            </h1>
          </div>
        </NarrowContainer>
      </Container>
    </div>
  );
}
