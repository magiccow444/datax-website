/**
 * Single source of truth for club info.
 *
 * If you are a new officer updating this site: almost everything you need to
 * change is in this file, plus src/data/board.ts (officers) and
 * src/data/events.ts (calendar and past events). Edit the values, commit, and
 * the site rebuilds itself. You should not need to touch any HTML.
 *
 * Values marked TODO are placeholders — replace them with the real thing.
 */

export const club = {
  /** Short name, used in the nav and page titles. */
  name: 'DataX',
  /** Full name, used in the footer. */
  fullName: 'DataX',
  school: 'San Diego State University',
  /** Logo shown top-left in the header, relative to public/. Leave empty to show the name alone. */
  logo: '/images/logo.png',
  /** One line, shown under the club name in the hero. Keep it short. */
  tagline: 'Students from every major, working with data together.',
  /** A sentence or two. Used for the hero body and search/social previews. */
  description:
    'DataX is an interdisciplinary student organization at San Diego State University that brings together students interested in working with data. Our members come from a variety of majors, experience levels, and backgrounds, including data science, analytics, statistics, econometrics, machine learning, business intelligence, and related fields.',
};

export const meeting = {
  day: 'Wednesday',
  time: '6:00 PM',
  location: 'GMCS 421',
};

/**
 * Leave a link as an empty string and it will be hidden automatically —
 * nothing breaks, the link just does not render.
 */
export const links = {
  /** No mailto: — the site adds it. */
  email: 'dataxsdsu@gmail.com',
  linktree: 'https://linktr.ee/dataxsdsu',
  linkedin: 'https://www.linkedin.com/company/sdsu-datax',
  /** Where event updates are posted first. */
  instagram: 'https://www.instagram.com/dataxsdsu/',
  /** Discord invite. If set, it's the main "Join us" button. */
  discord: 'https://discord.gg/WA9GrxgGSA',
};

/** Nav items. Add a page here when you add one to src/pages/. */
export const nav: { label: string; href: string }[] = [
  { label: 'Executive Board', href: '/board' },
  { label: 'Calendar', href: '/calendar' },
  { label: 'Past Events', href: '/past-events' },
  { label: "Let's Connect", href: '/connect' },
];

/** What we do — the three cards on the home page. */
export const highlights = [
  {
    title: 'Guest Speakers',
    body: 'We invite professionals, alumni, and industry experts to share their experiences, career advice, and insights into the many fields that work with data.',
  },
  {
    title: 'Workshops',
    body: 'Hands-on sessions where you build technical, professional, and analytical skills you can use in coursework, internships, research, and your career. No prior experience needed.',
  },
  {
    title: 'Community and Collaboration',
    body: 'Socials, collaborations, and shared learning that connect students across disciplines. DataX is open to students of all majors and experience levels.',
  },
];
