/**
 * Calendar page (src/pages/calendar.astro) and Past Events page
 * (src/pages/past-events.astro).
 *
 * Event photos go in public/images/events/, speaker headshots in
 * public/images/speakers/. Optional fields can be left out entirely.
 */
import type { Photo } from './types';

export interface Speaker {
  name: string;
  /** e.g. 'Senior Data Scientist, Intuit'. Optional. */
  position?: string;
  photo?: string;
  /** LinkedIn or other profile URL. */
  profile?: string;
}

export interface CalendarEvent {
  title: string;
  /** YYYY-MM-DD */
  date: string;
  /** e.g. '6:00 – 7:30 PM' */
  time: string;
  location: string;
  description: string;
  speakers?: Speaker[];
  photos?: Photo[];
}

/**
 * General Body Meetings for the 2026–2027 academic year. Order doesn't matter;
 * the page sorts by date and splits them into Fall 2026 and Spring 2027.
 * Optional fields: speakers (name, position, photo, profile) and photos.
 */
export const calendar: CalendarEvent[] = [
  {
    title: 'GBM #1: Picnic Social',
    date: '2026-09-23',
    time: '6:00 – 7:00 PM',
    location: 'Aztec Green',
    description:
      'Kick off the year with a picnic. Meet the executive board, learn what DataX is about, and hear what we have planned for the semester.',
  },
  {
    title: 'GBM #2: Guest Speaker Kristine Dinh',
    date: '2026-09-30',
    time: '6:00 – 7:00 PM',
    location: 'SSW 1200',
    description: 'Kristine Dinh, Data Scientist at Brown & Brown, talks about working in data science. Cookies provided.',
    speakers: [{ name: 'Kristine Dinh', position: 'Data Scientist, Brown & Brown' }],
  },
  {
    title: 'GBM #3: Guest Speaker Nathaniel Shalev',
    date: '2026-10-07',
    time: '6:00 – 7:00 PM',
    location: 'GMCS 421',
    description: 'Nathaniel Shalev, Software Developer at General Atomics, shares their experience in industry.',
    speakers: [{ name: 'Nathaniel Shalev', position: 'Software Developer, General Atomics' }],
  },
  {
    title: 'GBM #4: Guest Speaker Noael Jabrael',
    date: '2026-10-14',
    time: '6:00 – 7:00 PM',
    location: 'GMCS 421',
    description:
      "Noael Jabrael from Data Science Alliance joins us to talk about data work and outreach. Plus: Rubio's all-day fundraiser for DataX.",
    speakers: [{ name: 'Noael Jabrael', position: 'Data Science Alliance' }],
  },
  {
    title: 'STEM Bowling Social',
    date: '2026-10-16',
    time: '1:00 – 3:00 PM',
    location: 'Location TBA',
    description:
      'A bowling social with SDSU AI, eLeetCoders, ACM, CTRL, SAME, and Math Club. A great way to meet people across STEM orgs.',
  },
  {
    title: 'GBM #5: Resume Review with Industry Professionals',
    date: '2026-10-21',
    time: '6:00 – 7:00 PM (may run longer)',
    location: 'Location TBA',
    description:
      "Get your resume reviewed one-on-one. We're lining up reviewers from companies including Amazon, Google, Apple, ASML, Qualcomm, and General Atomics. Plus: Panda Express all-day fundraiser for DataX.",
  },
  {
    title: 'GBM #6: Guest Speaker Ross Paul Martin',
    date: '2026-10-28',
    time: '6:00 – 7:00 PM',
    location: 'GMCS 421',
    description:
      'Ross Paul Martin, Data and Analytics Manager for the County of San Diego, talks about how data supports public services.',
    speakers: [{ name: 'Ross Paul Martin', position: 'Data and Analytics Manager, County of San Diego' }],
  },
  {
    title: 'GBM #7: Qualcomm Finance Panel',
    date: '2026-11-04',
    time: '6:00 – 7:00 PM (may run longer)',
    location: 'Location TBA',
    description: 'Three finance professionals from Qualcomm talk about how they use data day to day and answer your questions.',
    speakers: [
      { name: 'Jusraunaq Farmahan', position: 'Qualcomm' },
      { name: 'Alicia Hsiao', position: 'Qualcomm' },
      { name: 'Nikhita Patel', position: 'Qualcomm' },
    ],
  },
  {
    title: 'GBM #8: Gemini Workshop: Personal Data Dashboard',
    date: '2026-11-18',
    time: '6:00 – 7:00 PM',
    location: 'GMCS 421',
    description: 'Build your own personal data dashboard with Google Gemini in this hands-on workshop led by Annitha Krishnan.',
    speakers: [{ name: 'Annitha Krishnan' }],
  },
  {
    title: 'GBM #9: Study Social',
    date: '2026-12-02',
    time: '6:00 – 7:00 PM',
    location: 'Location TBA',
    description: 'Study for finals together and wind down the semester, possibly alongside other student organizations.',
  },
];

export interface PastEvent {
  title: string;
  /** Groups events on the page, e.g. 'Spring 2026'. */
  semester: string;
  /** Optional exact date, YYYY-MM-DD. Leave out if you only know the semester. */
  date?: string;
  caption: string;
  photos?: Photo[];
}

/**
 * Past events, newest semester first. Within a semester, list them in the order
 * they should appear.
 */
export const pastEvents: PastEvent[] = [
  {
    title: 'Biostatistics in Action: Inside a Clinical Study',
    semester: 'Spring 2026',
    date: '2026-04-23',
    caption:
      'Rory Bloch, Biostatistician at Shockwave Medical, walked through the role of a biostatistician across a clinical study, then ran a live SAS demo on power analysis and exact testing. A collaboration with SSA.',
    photos: [
      { src: '/images/events/img-8165.jpg', alt: 'Rory Bloch pointing to SAS code on the projector' },
      { src: '/images/events/spring-2026-biostatistics-flyer.jpg', alt: 'Event flyer for Biostatistics in Action' },
    ],
  },
  {
    title: 'Data in Public Budgeting',
    semester: 'Spring 2026',
    date: '2026-02-26',
    caption:
      "Charles Modica, Independent Budget Analyst for the City of San Diego, showed how data shapes the city's budget decisions.",
    photos: [
      { src: '/images/events/img-4764.jpg', alt: "Charles Modica presenting the city's general fund breakdown" },
      { src: '/images/events/spring-2026-public-budgeting-flyer.jpg', alt: 'Event flyer for Data in Public Budgeting' },
    ],
  },
  {
    title: 'Meet the Board with Kevin Pelaez',
    semester: 'Spring 2026',
    date: '2026-02-12',
    caption:
      'Our spring kickoff: members met the board, made new friends over pizza, and heard industry insights from SDSU alum Kevin Pelaez, Senior Data Scientist at Duo.',
    photos: [{ src: '/images/events/spring-2026-kickoff-flyer.jpg', alt: 'Event flyer for the spring kickoff' }],
  },
];
