import Container from "./Container";
import NarrowContainer from "./NarrowContainer";

export default function Intro() {
  return (
    <div>
      <Container>
        <NarrowContainer>
          <div className="py-32 px-8">
            <p className="text-2xl leading-relaxed text-gray-600 animate-fade-in-down opacity-0">
              Senior fullstack udvikler og product manager med 8 års erfaring
              inden for SaaS og eCommerce. <br />
              <br />
              Senest har jeg været hos en af Danmarks stærkeste eCommerce brands{" "}
              <a
                href="https://sofacompany.com"
                className="font-bold"
                target="_blank"
                rel="noreferrer"
              >
                SOFACOMPANY
              </a>{" "}
              og tidligere hos
              <a
                href="https://schodt.dk"
                className="font-bold"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                SCHØDT A/S
              </a>{" "}
              og{" "}
              <a
                href="https://yourlocal.org"
                className="font-bold"
                target="_blank"
                rel="noreferrer"
              >
                YourLocal
              </a>
              .
            </p>
          </div>
        </NarrowContainer>
      </Container>
    </div>
  );
}
