/**
 * Single source of truth for club info.
 *
 * If you are a new officer updating this site: almost everything you need to
 * change is in this file. Edit the values below, commit, and the site rebuilds
 * itself. You should not need to touch any HTML.
 *
 * Values marked TODO are placeholders — replace them with the real thing.
 */

export const club = {
  /** Short name, used in the nav and page titles. */
  name: 'DataX',
  /** TODO: full name as it appears officially. */
  fullName: 'DataX Data Science Club',
  /** TODO: your school. */
  school: 'San Diego State University',
  /** One line, shown under the club name in the hero. Keep it short. */
  tagline: 'Learn data science by building things with people who are figuring it out too.',
  /** A sentence or two. Used for the hero body and search/social previews. */
  description:
    'We are a student-run club for anyone curious about data, no experience required. We run hands-on workshops, build real projects together, and help each other get better at the tools that actually matter.',
};

export const meeting = {
  /** TODO: confirm these before sharing the site. */
  day: 'Wednesday',
  time: '6:00 PM',
  location: 'Room TBD',
};

/**
 * Leave a link as an empty string and it will be hidden automatically —
 * nothing breaks, the link just does not render.
 */
export const links = {
  /** TODO: your Discord/Slack invite. This is the main call-to-action. */
  discord: '',
  /** TODO: club email. */
  email: '',
  instagram: '',
  github: '',
};

/**
 * Nav items. Add a page here when you add one to src/pages/.
 * Example: { label: 'Events', href: '/events' }
 */
export const nav: { label: string; href: string }[] = [];

/** What we do — the three cards on the home page. */
export const highlights = [
  {
    title: 'Workshops',
    body: 'Beginner-friendly sessions on Python, pandas, SQL, visualization, and machine learning. Bring a laptop, leave having built something.',
  },
  {
    title: 'Projects',
    body: 'Small teams work on real datasets across a semester, from scraping and cleaning through to a result worth showing off.',
  },
  {
    title: 'Community',
    body: 'Study groups, interview prep, and people a year or two ahead of you who remember exactly how confusing this was.',
  },
];
