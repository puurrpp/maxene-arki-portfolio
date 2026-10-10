export type TechnicalDrawing = {
  title: string;
  src: string;
};

export const projects = [
  {
    id: "solana",
    title: "Solana Residences",
    category: "Mid-Rise Residential",
    location: "Muntinlupa City",
    image: "/images/solana-hero.jpg",
    philosophy:
      "Designing with empathy, building for all, sustaining tomorrow",
    concept:
      "Inspired by a blooming star, the 15-storey mid-rise structure extends outward to maximize natural lighting, ventilation, and biophilic connection in Muntinlupa City",
    hasResearchPaper: true,
    elevationImage: "/images/solana-elevation.jpg",
    technicalDrawings: [
      { title: "Site Development Plan", src: "/images/technical-placeholder.svg" },
      { title: "Basement Floor Plan", src: "/images/technical-placeholder.svg" },
      { title: "Typical Floor Plan", src: "/images/technical-placeholder.svg" },
      { title: "Roof Plan", src: "/images/technical-placeholder.svg" },
    ],
  },
  {
    id: "kasarinlan",
    title: "Kasarinlan Sports Complex",
    category: "Civic & Sports Architecture",
    location: "Bacoor, Cavite",
    image: "/images/kasarinlan-hero.jpg",
    philosophy:
      "Architecture as a dynamic catalyst for urban development, public health, and cultural exchange",
    concept:
      "Drawing inspiration from the Sarimanok and the Filipino spatial principle of Maaliwalas (breathability), the sweeping long-span structural form establishes a recognizable contemporary landmark",
    hasTechnicalDrawings: true,
    technicalDrawings: [
      { title: "Basement Plan 1", src: "/images/kasarinlan-basement.png" },
      { title: "Ground Floor Plan", src: "/images/ground floor plan.png" },
      { title: "Longitudinal Section", src: "/images/kasarinlan-sections.png" },
      { title: "Cross Section", src: "/images/kasarinlan-sections.png" },
      { title: "3D Truss System", src: "/images/kasarinlan-truss.png" },
    ],
  },
];
