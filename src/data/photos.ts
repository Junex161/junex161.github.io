/*
  Photo gallery, grouped into sections.
  To add a photo: put the file in src/assets/photos/, import it below and add it to a section.
  To add a section: add another { title, intro, photos } block.
*/
import starTrails from '../assets/photos/star-trails.jpg';
import moon from '../assets/photos/moon.jpg';
import milkyWay from '../assets/photos/milky-way.jpg';
import comet from '../assets/photos/comet.jpg';
import bohinj from '../assets/photos/bohinj.jpg';
import kuopio from '../assets/photos/kuopio.jpg';
import egmond from '../assets/photos/egmond-aan-zee.jpg';
import bled from '../assets/photos/bled.jpg';

export type Photo = {
  src: ImageMetadata;
  title: string;
  alt: string;
  note?: string;
};

export type Section = { id: string; title: string; intro?: string; photos: Photo[] };

export const sections: Section[] = [
  {
    id: 'astro',
    title: 'Night sky',
    intro: 'Things that only show up in the dark.',
    photos: [
      {
        src: comet,
        title: 'Comet NEOWISE',
        alt: 'Comet NEOWISE with a bright head and a long tail among scattered stars.',
      },
      {
        src: milkyWay,
        title: 'Milky Way',
        alt: 'The band of the Milky Way crossing a sky full of stars, with dark dust lanes.',
      },
      {
        src: starTrails,
        title: 'Star trails',
        alt: 'Concentric star trails circling the celestial pole above the dark silhouette of a tree.',
      },
      {
        src: moon,
        title: 'Full moon',
        alt: 'A small full moon alone in a black sky.',
      },
    ],
  },  {
    id: 'travel',
    title: 'Travel',
    intro: 'Lakes, coasts and mountains from the road.',
    photos: [
      {
        src: bohinj,
        title: 'Lake Bohinj, Slovenia',
        alt: 'Still water of Lake Bohinj mirroring rocky, snow-dusted mountains under a clear blue sky.',
      },
      {
        src: kuopio,
        title: 'Kuopio, Finland',
        alt: 'Sunset over a calm lake, with a distant factory chimney smoking against an orange horizon and bare branches in the corner.',
      },
      {
        src: egmond,
        title: 'Egmond aan Zee, Netherlands',
        alt: 'A sandy path with footprints leading between grassy dunes towards the North Sea.',
      },
      {
        src: bled,
        title: 'Lake Bled, Slovenia',
        alt: 'Lake Bled with its island church reflected in the blue water, snow-capped mountains behind.',
      },
    ],
  },
];
