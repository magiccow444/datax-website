/**
 * Executive Board page (src/pages/board.astro).
 *
 * Photos go in public/images/board/. Square-ish headshots look best for
 * officers; any size works for group photos. Leave `photo` empty and the page
 * shows the person's initials instead.
 */
import type { Photo } from './types';

export const boardYear = '2026–2027';

/** TODO: add group photos, e.g. { src: '/images/board/group-1.jpg', alt: 'The 2026–2027 executive board' } */
export const groupPhotos: Photo[] = [];

export interface Officer {
  name: string;
  position: string;
  major: string;
  /** e.g. 'Junior', 'Senior', 'Graduate student' */
  year: string;
  /** e.g. '/images/board/jane-doe.jpg' */
  photo?: string;
}

/**
 * TODO: add every officer, in the order they should appear. Example:
 *   { name: 'Jane Doe', position: 'President', major: 'Statistics', year: 'Senior', photo: '/images/board/jane-doe.jpg' },
 */
export const officers: Officer[] = [];

export const advisor = {
  name: 'Kyle Hasenstab',
  title: 'Faculty Advisor',
  /** TODO: e.g. 'Department of Mathematics and Statistics'. Leave empty to hide. */
  department: '',
  /** TODO: e.g. '/images/board/kyle-hasenstab.jpg' */
  photo: '',
};
