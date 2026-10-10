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
    image: "/images/solana hero.jpg",
    philosophy:
      "Designing with empathy, building for all, sustaining tomorrow",
    concept:
      "Inspired by a blooming star, the 15-storey mid-rise structure extends outward to maximize natural lighting, ventilation, and biophilic connection in Muntinlupa City",
    hasResearchPaper: true,
    conceptBoardImage: "/images/concept board.jpg",
    conceptBoardTitle: "CONCEPT BOARD",
    conceptBoardSubtitle: "PROJECT OVERVIEW & DESIGN PHILOSOPHY",
    technicalDrawings: [
      { title: "Site Development Plan", src: "/images/site dev plan.jpg" },
      { title: "Basement Floor Plan", src: "/images/basement floor plan.jpg" },
      { title: "Ground Floor Plan", src: "/images/gfloor plan.jpg" },
      { title: "Typical Floor Plan (3rd-6th and 12th-15th Floors)", src: "/images/typical 3rd-15.jpg" },
      { title: "Typical Floor Plan (7th-10th Floors)", src: "/images/typ floor 7th-10th.jpg" },
      { title: "Typical Atrium Plan (2nd and 11th Floor)", src: "/images/typ atrium.jpg" },
      { title: "Roof Plan", src: "/images/roof plan.jpg" },
      { title: "Elevations", src: "/images/elevations.jpg" },
      { title: "Section A-A Plan", src: "/images/section aa.jpg" },
      { title: "Section B-B Plan", src: "/images/section bb.jpg" },
      { title: "BLow-Up Plan", src: "/images/blowup.jpg" },
      { title: "Site Utilization Plan", src: "/images/siteuti.jpg" }

    ],
  },
  {
    id: "kasarinlan",
    title: "Kasarinlan Sports Complex",
    category: "Civic & Sports Architecture",
    location: "Bacoor, Cavite",
    image: "/images/kasarinlan sitedev.jpg",
    philosophy:
      "Architecture as a dynamic catalyst for urban development, public health, and cultural exchange",
    concept:
      "Drawing inspiration from the Sarimanok and the Filipino spatial principle of Maaliwalas (breathability), the sweeping long-span structural form establishes a recognizable contemporary landmark",
    conceptBoardImage: "/images/concept board kasarinlan.jpg",
    conceptBoardTitle: "CONCEPT BOARD",
    conceptBoardSubtitle: "PROJECT OVERVIEW & SARIMANOK DESIGN PHILOSOPHY",
    hasTechnicalDrawings: true,
    technicalDrawings: [
      { title: "Site Development Plan", src: "/images/kasarinlan sitedev.jpg" },
      { title: "Perspectives", src: "/images/perspectives.jpg" },
      { title: "Perspective", src: "/images/pers1.jpg" },
      { title: "Perspective", src: "/images/pers2.jpg" },
      { title: "Perspective", src: "/images/pers3.jpg" },
      { title: "Basement Plan 1", src: "/images/kasarinlan-basement.png" },
      { title: "Ground Floor Plan", src: "/images/ground floor plan.png" },
      { title: "Sections", src: "/images/kasarinlan-sections.png" },
      { title: "Truss System", src: "/images/kasarinlan-truss.png" },
    ],
  },
];
