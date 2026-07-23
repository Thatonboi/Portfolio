/* ============================================================================
   SITE CONTENT — EDIT THIS FILE ONLY
   ----------------------------------------------------------------------------
   Everything shown on the site is generated from the CONTENT object below.
   To update the site — change text, add a project, swap a photo — edit the
   values here and save. You never need to touch app.js, style.css, or
   index.html for a normal content update.

   Images: point any "image" field at a file in /assets. Recommended sizes:
     - person.avatar        square, at least 500x500px  (jpg/png/webp)
     - project.cover        4:3 landscape, at least 1200x900px
     - project.gallery[]    same as cover, any number of images
   If an image file is missing, a generated placeholder is shown instead,
   so the site never breaks — just drop in real files and refresh.
============================================================================ */

const CONTENT = {

  /* ---------------------------------------------------------------------
     PERSON — hero / about info shown on the Home screen
  --------------------------------------------------------------------- */
  person: {
    name: "Jordan Blake",
    title: "Software Engineer",
    headline: "Building Reliable\nSoftware Systems",  // big two-line hero headline — use \n for a manual line break
    tagline: "I build fast, reliable products for the web — from backend systems to the pixels people touch.",
    location: "Miami, FL",
    availability: "Available for new roles",   // shown on the small chip over the hero photo
    avatar: "profile.svg",     // replace with profile.jpg for a real photo
    bio: "I'm a software engineer who likes working across the whole stack — designing APIs, shaping data models, and polishing the interfaces people actually use. I care about performance, clean abstractions, and shipping things that hold up in production. Outside of work I contribute to a couple of open-source tools and spend too much time tuning my terminal setup.",
    focusAreas: ["Backend Systems", "Distributed Infrastructure", "Developer Tooling", "Cloud Architecture"], // interactive list under the hero bio
    resumeUrl: "resume.pdf",   // add a resume.pdf next to index.html and this will link to it
    email: "jordan@example.com",
    phone: "+1 (305) 555-0148",
    socials: [
      { name: "GitHub",   url: "https://github.com/",   icon: "github" },
      { name: "LinkedIn", url: "https://linkedin.com/", icon: "linkedin" },
      { name: "X",        url: "https://x.com/",        icon: "twitter" }
    ]
  },

  /* ---------------------------------------------------------------------
     EXPERIENCE — reverse-chronological list, shown on Home screen
  --------------------------------------------------------------------- */
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Northwind Labs",
      period: "2023 — Present",
      description: "Lead engineer on the platform team. Redesigned the core API gateway, cutting p95 latency by 40%, and mentor a team of four engineers.",
      tags: ["TypeScript", "Go", "AWS", "Kubernetes"]
    },
    {
      role: "Software Engineer",
      company: "Fieldstone",
      period: "2021 — 2023",
      description: "Built and shipped the customer-facing dashboard used by 50k+ monthly active users, and owned the billing service end to end.",
      tags: ["React", "Node.js", "PostgreSQL"]
    },
    {
      role: "Software Engineer Intern",
      company: "Halcyon Systems",
      period: "Summer 2020",
      description: "Built an internal tool for automating QA regression reports, reducing manual test-triage time by roughly 6 hours a week.",
      tags: ["Python", "Django"]
    }
  ],

  /* ---------------------------------------------------------------------
     PROJECTS — shown as a preview on Home and in full on the Portfolio
     screen. Each opens a detail overlay when clicked.
     - "cover" is the tile image (title sits on top of it)
     - "gallery" is the list of extra images shown inside the overlay
  --------------------------------------------------------------------- */
  projects: [
    {
      id: "orbit",
      title: "Orbit",
      category: "Web App · Product",
      summary: "A real-time scheduling tool for distributed teams across time zones.",
      description: "Orbit helps distributed teams find overlapping working hours and schedule meetings without the timezone math. I designed the scheduling engine, built the real-time availability sync with WebSockets, and led the frontend rebuild in React. The tool now handles over 2,000 teams and syncs availability changes in under 200ms.",
      tags: ["React", "WebSockets", "Node.js", "PostgreSQL"],
      cover: "project1.svg",
      gallery: ["project1.svg", "project2.svg"],
      links: { live: "https://example.com", code: "https://github.com/" }
    },
    {
      id: "lattice",
      title: "Lattice",
      category: "Design System",
      summary: "A component library and design system used across three product teams.",
      description: "Lattice is the shared design system I built to unify three separate product teams under one visual language. It includes a themeable component library, a documentation site, and a Figma plugin that keeps design tokens in sync with code. Adoption cut new-feature UI build time by roughly a third.",
      tags: ["TypeScript", "Storybook", "Figma API"],
      cover: "project2.svg",
      gallery: ["project2.svg", "project3.svg"],
      links: { live: "", code: "https://github.com/" }
    },
    {
      id: "pathfinder",
      title: "Pathfinder",
      category: "Mobile App",
      summary: "An offline-first route planner for hikers, built with React Native.",
      description: "Pathfinder lets hikers download trail maps and plan routes entirely offline. I built the offline map tile caching layer, the elevation-aware route planner, and the native iOS/Android release pipeline. It's a side project that grew to a few thousand active users through word of mouth.",
      tags: ["React Native", "SQLite", "Mapbox"],
      cover: "project3.svg",
      gallery: ["project3.svg", "project4.svg"],
      links: { live: "https://example.com", code: "https://github.com/" }
    },
    {
      id: "signal",
      title: "Signal Board",
      category: "Internal Tool",
      summary: "A monitoring dashboard that turns raw service metrics into plain-language alerts.",
      description: "Signal Board ingests metrics from our services and translates threshold breaches into plain-language alerts routed to the right team automatically, instead of a wall of graphs nobody reads at 2am. I built the alert-routing rules engine and the dashboard frontend.",
      tags: ["Go", "Grafana", "React"],
      cover: "project4.svg",
      gallery: ["project4.svg", "project5.svg"],
      links: { live: "", code: "https://github.com/" }
    },
    {
      id: "cartouche",
      title: "Cartouche",
      category: "Open Source",
      summary: "A lightweight CLI for generating typed API clients from OpenAPI specs.",
      description: "Cartouche reads an OpenAPI spec and generates a fully typed client in TypeScript, Python, or Go, with no runtime dependencies. I built it to stop hand-writing API clients at work and open-sourced it afterward. It now has contributors outside the original team.",
      tags: ["Rust", "CLI", "Open Source"],
      cover: "project5.svg",
      gallery: ["project5.svg", "project6.svg"],
      links: { live: "", code: "https://github.com/" }
    },
    {
      id: "harbor",
      title: "Harbor",
      category: "Web App",
      summary: "A lightweight invoicing tool built for freelancers, from idea to first paying customer.",
      description: "Harbor is a small invoicing and time-tracking tool I built end to end — product decisions, design, backend, and billing integration with Stripe. It was my first solo product launch, from idea to first paying customer in six weeks.",
      tags: ["Next.js", "Stripe", "Postgres"],
      cover: "project6.svg",
      gallery: ["project6.svg", "project1.svg"],
      links: { live: "https://example.com", code: "" }
    }
  ],

  /* ---------------------------------------------------------------------
     CONTACT — small overlay page
  --------------------------------------------------------------------- */
  contact: {
    heading: "Let's talk",
    message: "Open to new roles, freelance work, or just a good conversation about engineering. Reach out however's easiest."
    // email, phone, and socials are reused from `person` above
  }
};
