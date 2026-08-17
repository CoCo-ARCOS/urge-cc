/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  URGE-CC — SINGLE SOURCE OF TRUTH
 * ─────────────────────────────────────────────────────────────────────────────
 *  Everything shown on the site is defined in this file. Edit the values below
 *  and the page updates — you should not need to touch any .astro file to
 *  change copy, dates, people, or links.
 *
 *  Anything marked `TBA` / `#` is a placeholder waiting on real information.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  /* ── Identity ──────────────────────────────────────────────────────────── */
  abbr: "URGE-CC",
  title:
    "1st Workshop on Urgent Computing Applications Across the Edge-to-HPC Computing Continuum",
  tagline:
    "Bridging HPC, cloud, and dynamic edge environments to meet the deadlines that emergencies impose.",

  /* Used for <title>, meta description and Open Graph */
  meta: {
    description:
      "URGE-CC is a workshop at HPC Asia 2027 in Seoul, Korea, on urgent computing across the edge-to-HPC computing continuum: dynamic workflow orchestration, I/O and storage, decentralised intelligence, energy efficiency, and agentic resource management.",
    /**
     * The deployed URL is NOT set here — it comes from `site` and `base` in
     * astro.config.mjs, which canonical and Open Graph tags read from.
     */
    /** Path (inside /public) to a 1200×630 social preview image, or null. */
    ogImage: null as string | null,
  },

  /* ── The host conference ───────────────────────────────────────────────── */
  conference: {
    name: "HPC Asia 2027",
    longName:
      "International Conference on High Performance Computing in Asia-Pacific Region",
    year: "2027",
    city: "Seoul",
    country: "Korea",
    /** Shown in the hero strip and venue section. Set to "TBA" until confirmed. */
    dates: "TBA",
    venue: "TBA",
    url: "#",
  },

  /* ── Hero banner ───────────────────────────────────────────────────────── */
  hero: {
    /**
     * "skyline" — the built-in illustrated Seoul skyline (no asset needed).
     * "photo"   — your own photograph from /public, configured below.
     */
    background: "photo" as "skyline" | "photo",

    /**
     * Only used when `background` is "photo". Drop the file in
     * `src/assets/hero/` and name it here — Astro resizes it and serves WebP
     * automatically, so a large original is fine. (A path starting with "/" is
     * treated as a file in /public instead, served as-is with no optimisation.)
     */
    photo: "seoul-south-korea.jpg",
    photoAlt:
      "The Seoul skyline at dusk, with N Seoul Tower rising above Namsan.",
    /** How much to darken the photo so the headline stays readable (0–1). */
    photoScrim: 0.62,
    /**
     * Credit line shown small in the bottom corner. Either a plain string, or
     * `{ text, href }` to make it a link. Set to null for none.
     */
    photoCredit: "Image by tawatchai07 on Magnific" as
      | string
      | { text: string; href: string }
      | null,
  },

  /* ── Primary calls to action (hero buttons) ────────────────────────────── */
  cta: {
    primary: { label: "Submit a paper", href: "#submission" },
    secondary: { label: "Call for papers", href: "#topics" },
  },

  /* ── Navigation ────────────────────────────────────────────────────────── */
  /** Order here is the order in the sticky header. `id` must match a section. */
  nav: [
    { id: "motivation", label: "Motivation" },
    { id: "topics", label: "Topics" },
    { id: "dates", label: "Dates" },
    { id: "submission", label: "Submission" },
    { id: "committee", label: "Committee" },
  ],

  /* ── Hero fact strip ───────────────────────────────────────────────────── */
  facts: [
    { label: "Co-located with", value: "HPC Asia 2027" },
    { label: "Location", value: "Seoul, Korea" },
    { label: "Workshop date", value: "TBA" },
    { label: "Format", value: "Full-day, in person" },
  ],

  /* ── Motivation and objectives ─────────────────────────────────────────── */
  motivation: {
    heading: "Motivation and objectives",
    lead: "",

    /** The motivation: why this workshop, and what makes the problem hard. */
    body: [
      "Current large-scale applications expand across multi-tier architectures spanning the computing continuum, combining edge, fog, cloud, and HPC resources. This is driven by the continuous growth of workloads as extreme weather events, public health emergencies, and sudden natural disasters increasingly threaten global populations.",
      "Such continuum systems, however, face a series of challenges — including heterogeneity and reliability, alongside hard constraints on deadlines, latency, and energy.",
      "The main goal of URGE-CC is to bridge the gap between traditional high-end resources — such as HPC and cloud infrastructures — and highly dynamic edge environments, with a special focus on addressing urgent problems requiring emergency response."
    ],

    /**
     * The objectives, continuing the same prose flow as `body` above.
     * `title` is an optional bold lead-in — set it to "" for a plain paragraph.
     * Set `objectivesHeading` to "" to drop the subheading entirely.
     */
    objectivesHeading: "Our objectives",
    objectives: [
      {
        title: "Bring the communities together",
        body: "Convene researchers from across HPC, large-scale storage systems, and edge computing who are impacted by — or actively pursuing — computing continuum concepts.",
      },
      {
        title: "Advance urgent edge computing",
        body: "Explore multi-tier architectures across the continuum that can dynamically handle urgent workloads under widely differing constraints.",
      },
      {
        title: "Design the systems layer",
        body: "Present policies, architectures, and schedulers that solve the computing and storage challenges of managing urgent data across the computing continuum.",
      },
    ],
  },

  /* ── Topics of interest ────────────────────────────────────────────────── */
  topics: {
    heading: "Topics of interest",
    lead: "This workshop looks for original, high-quality research on computing continuum systems. Topics of interest include, but are not limited to:",
    items: [
      {
        title: "Dynamic workflow orchestration",
        body: "Scheduling and steering workflows that span edge-to-HPC environments as conditions change.",
      },
      {
        title: "I/O and storage systems",
        body: "Data paths, caching, and movement for computing continuum applications under pressure.",
      },
      {
        title: "Urgent edge & decentralised intelligence",
        body: "Inference, learning, and decision-making pushed out to continuum environments.",
      },
      {
        title: "Energy efficiency and reliability",
        body: "Sustaining urgent execution within power envelopes and in the presence of failures.",
      },
      {
        title: "Agentic workflows",
        body: "Autonomous agents that manage and negotiate computing continuum resources.",
      },
      {
        title: "Ad-hoc and malleable storage",
        body: "Storage systems that are provisioned, reshaped, and torn down alongside the workload.",
      },
      {
        title: "Use cases and experiences",
        body: "Deploying and operating real urgent applications across the continuum, and what it taught you.",
      },
    ],
  },

  /* ── Important dates ───────────────────────────────────────────────────── */
  dates: {
    heading: "Important dates",
    note: "All deadlines are 23:59 AoE (Anywhere on Earth). Dates are provisional until the workshop is confirmed in the HPC Asia 2027 programme.",
    items: [
      { label: "Paper submission deadline", date: "October 31, 2026" },
      { label: "Notification of acceptance", date: "November 28, 2026" },
      { label: "Camera-ready version due", date: "December 20, 2026" },
      { label: "Workshop day", date: "TBA", highlight: true },
    ],
  },

  /* ── Submission ────────────────────────────────────────────────────────── */
  submission: {
    heading: "Submission",
    lead: "All authors should submit manuscripts for review in a two-column format. Manuscripts must be at 8 to 10 pages in PDF format, including figures and references, formatted according to the ACM Proceedings Style.",

    /** The manuscript requirements at a glance. */
    specs: [
      { label: "Style", value: "ACM Proceedings Style" },
      { label: "Layout", value: "Two columns" },
      { label: "Length", value: "8–10 pages, incl. figures and references" },
      { label: "File type", value: "PDF" },
    ],

    /** Double-anonymized review, and what authors must do about it. */
    anonymity: {
      heading: "Double-anonymized review",
      body: 'Submissions will be examined by at least 3 reviewers following a double-anonymized peer-review process, where reviewers will not know the authors’ identities, and vice versa. Authors must therefore "anonymize" their submissions for review by adopting the following guidelines, otherwise papers will be rejected without review:',
      rules: [
        "Authors cannot include their names, affiliations, funding sources, or acknowledgments in any part of the for-review version of their paper.",
        "Self-references that are relevant to the work are allowed, but they should not appear in the text in the first person. Instead, they should be referenced in the third person, like “Smith et al. found that… [4].”",
        "For the authors’ own unpublished work, use anonymous citations.",
      ],
      /**
       * Optional highlighted callout under the rules. Empty by default because
       * `body` above already states the consequence — fill it in only if you
       * want that point repeated with visual emphasis.
       */
      warning: "",
    },

    /** Set `href` to your submission system (EasyChair, HotCRP, …) when live. */
    button: { label: "Submit via EasyChair", href: "#", disabled: true },
    disabledNote: "The submission site opens closer to the deadline.",
  },

  /* ── People ────────────────────────────────────────────────────────────── */
  committee: {
    heading: "Workshop chairs",
    lead: "Get in touch with any of the organisers with questions about the workshop.",
    /**
     * Add or remove entries freely — the grid reflows (2×2 at four entries).
     *
     * `photo` — a filename in `src/assets/organisers/`. Astro crops and resizes
     *   it, so any reasonably square headshot works. Leave "" and the card
     *   falls back to the person's initials.
     * `email` — shown as a mailto link. Leave "" to omit the line.
     * `url`   — personal or group homepage. "#" or "" means no link.
     */
    organisers: [
      {
        name: "Prof. Jesus Carretero",
        role: "",
        affiliation: "Universidad Carlos III de Madrid",
        photo: "jesus.png",
        email: "jesus.carretero@uc3m.es",
        url: "#",
      },
      {
        name: "Dr. Dante D. Sanchez-Gallegos",
        role: "",
        affiliation: "Universidad Carlos III de Madrid",
        photo: "dante.png",
        email: "dantedomizzi.sanchez@uc3m.es",
        url: "#",
      },
      {
        name: "Prof. Manish Parashar",
        role: "",
        affiliation: "University of Utah",
        photo: "manish.png",
        email: "manish.parashar@utah.edu",
        url: "#",
      },
      {
        name: "Prof. Rafael Tolosana",
        role: "",
        affiliation: "Universidad de Zaragoza",
        photo: "rafael.png",
        email: "rafaelt@unizar.es",
        url: "#",
      },
    ],
    pcHeading: "Programme committee",
    /** Plain strings — "Name, Affiliation" reads best. */
    programme: ["TBA"],
  },

  /* ── Venue ─────────────────────────────────────────────────────────────── */
  /*venue: {
    heading: "Seoul, Korea",
    body: [
      "URGE-CC is held as part of HPC Asia 2027 in Seoul, Republic of Korea. The workshop runs as a full-day session within the main conference programme.",
      "Registration, accommodation, and visa information are handled by the main conference. Details will be linked here once the HPC Asia 2027 site is live.",
    ],
    
    details: [
      { label: "City", value: "Seoul, Republic of Korea" },
      { label: "Venue", value: "TBA" },
      { label: "Conference dates", value: "TBA" },
      { label: "Registration", value: "Via HPC Asia 2027" },
    ],
  },*/

  /* ── Alignment statement (footer band) ─────────────────────────────────── */
  /*alignment: {
    heading: "Contribution to the main conference",
    body: "URGE-CC aligns with HPC Asia 2027 by addressing how traditional HPC data centres must evolve to ingest, orchestrate, and process large workloads by extending systems across edge, fog, and cloud architectures. By bringing together the computing continuum and urgent HPC execution, URGE-CC attracts submissions that cross-pollinate ideas between the cloud, edge, and HPC communities — enriching the main conference's technical diversity.",
  },*/

  /* ── Contact & footer ──────────────────────────────────────────────────── */
  contact: {
    email: "dantedomizzi.sanchez@uc3m.es",
    links: [
      { label: "HPC Asia 2027", href: "https://hpcasia2027.org/2027/" }
    ],
  },
};

export type Site = typeof site;
