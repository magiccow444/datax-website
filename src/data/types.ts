/** A photo in public/images/. `src` is relative to public/, e.g. '/images/board/group.jpg'. */
export interface Photo {
  src: string;
  /** Describe the photo for screen readers, e.g. 'Officers at the fall kickoff'. */
  alt: string;
}
