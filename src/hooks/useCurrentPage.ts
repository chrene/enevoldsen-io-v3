import { useEffect, useState } from "react";

function getFragmentFromLocation() {
  if (typeof window === 'undefined') return undefined;
  const url = new URL(window.location.href);
  return url.hash.replace("#", "") || "intro";
}

export function useCurrentPage() {
  const [page, setPage] = useState(getFragmentFromLocation());

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          window.history.replaceState(
            null,
            "",
            `#${id}`
          );
          setPage(id || "intro");
        }
      }
    }, {
      rootMargin: "-50% 0px -50% 0px",
    });
    sections.forEach((section) => observer.observe(section));
  }, []);

  return page;
}
