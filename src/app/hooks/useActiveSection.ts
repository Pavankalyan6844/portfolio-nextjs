"use client";

import { useEffect } from "react";
import { useState } from "react";

const SECTION_IDS = [
  "home",
  "about",
  "experience",
  "skills",
  "projects",
  "contact",
];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash.replace("#", "");

      if (SECTION_IDS.includes(hash)) {
        setActiveSection(hash);
      } else if (!hash) {
        setActiveSection("home");
      }
    };

    const updateFromScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "home";

      for (const id of SECTION_IDS) {
        const section = document.getElementById(id);

        if (!section) continue;

        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY;

        if (scrollPosition >= sectionTop) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    // Initial state
    updateFromHash();
    updateFromScroll();

    // When clicking #about, #experience, etc.
    window.addEventListener("hashchange", updateFromHash);

    // When manually scrolling
    window.addEventListener("scroll", updateFromScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("hashchange", updateFromHash);
      window.removeEventListener("scroll", updateFromScroll);
    };
  }, []);

  return activeSection;
}
