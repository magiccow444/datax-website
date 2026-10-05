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
  /** e.g. 'Senior Data Scientist, Intuit' */
  position: string;
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
    time: '6:00 PM',
    location: 'Aztec Green',
    description:
      'Kick off the year with a picnic. Meet the executive board, learn what DataX is about, and hear what we have planned for the semester.',
  },
  {
    title: 'GBM #2: Guest Speaker',
    date: '2026-10-07',
    time: '6:00 PM',
    location: 'GMCS 421',
    description: 'Speaker to be announced. Follow our Instagram for the reveal.',
  },
  {
    title: 'GBM #3: Guest Speaker from Data Science Alliance',
    date: '2026-10-14',
    time: '6:00 PM',
    location: 'GMCS 421',
    description: 'Noelle from Data Science Alliance joins us to talk about working in data and how to get started.',
    speakers: [{ name: 'Noelle', position: 'Data Science Alliance' }],
  },
  {
    title: 'GBM #4: Resume and LinkedIn Workshop',
    date: '2026-10-21',
    time: '6:00 PM',
    location: 'GMCS 421',
    description:
      'Get your resume and LinkedIn ready for internship and job applications, whatever field you are aiming for.',
  },
  {
    title: 'GBM #5: Qualcomm Financial Analyst Panel',
    date: '2026-11-04',
    time: '6:00 PM',
    location: 'GMCS 421',
    description:
      'Three financial analysts from Qualcomm talk about how they use data day to day and answer your questions.',
  },
  {
    title: 'GBM #6: Gemini Workshop',
    date: '2026-11-18',
    time: '6:00 PM',
    location: 'GMCS 421',
    description: 'A hands-on collaborative workshop on using Google Gemini. More details soon.',
  },
  {
    title: 'GBM #7: Study Social',
    date: '2026-12-02',
    time: '6:00 PM',
    location: 'GMCS 421',
    description:
      'Wind down the semester and study for finals together, possibly alongside other student organizations.',
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
