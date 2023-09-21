import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Sponsor = defineDocumentType(() => ({
  name: 'Sponsor',
  filePathPattern: `sponsors/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    logo: { type: 'string' },
    link: { type: 'string', required: true },
    isMeetupSponsor: { type: 'boolean', required: false },
    sponsor: {
      type: 'enum',
      options: ['disabled', 'bronze', 'silver', 'gold', 'platinium'],
      default: 'disabled',
    },
  },
  computedFields: {
    logoSrc: {
      type: 'string',
      resolve: (doc) => `/images/sponsors/${doc.logo}`,
    },
  },
}));

export const Association = defineDocumentType(() => ({
  name: 'Association',
  filePathPattern: 'associations/**/*.mdx',
  fields: {
    name: { type: 'string', required: true },
    link: { type: 'string' },
    logo: { type: 'string', required: true },
  },
  computedFields: {
    logoSrc: {
      type: 'string',
      resolve: (doc) => `/images/associations/${doc.logo}`,
    },
  },
}));

export const Organiser = defineDocumentType(() => ({
  name: 'Organiser',
  filePathPattern: 'organisers/**/*.mdx',
  fields: {
    name: { type: 'string', required: true },
    image: { type: 'string' },
    twitter: { type: 'string' },
    github: { type: 'string' },
    linkedin: { type: 'string' },
    active: { type: 'boolean' },
  },
  computedFields: {
    imageSrc: {
      type: 'string',
      resolve: (doc) => `/images/organisers/${doc.image}`,
    },
  },
}));

export const Meetup = defineDocumentType(() => ({
  name: 'Meetup',
  filePathPattern: 'meetups/**/*.{md,mdx}',
  contentType: 'mdx',
  fields: {
    // This is a legacy field, check to remove it
    layout: { type: 'string' },
    // This looks like a legacy field, check to remove it
    group: { type: 'string' },
    // This looks like a legacy field, check to remove it
    category: { type: 'enum', options: ['meetup'] },
    slug: { type: 'string', required: true },
    published: { type: 'boolean' },
    title: { type: 'string', required: true },
    canceled: { type: 'boolean' },
    excerpt: { type: 'string', required: true },
    meetup_date: { type: 'date', required: true },
    meetup_start_time: { type: 'string', required: true },
    meetup_end_time: { type: 'string' },
    meetup_location: { type: 'string' },
    meetup_register_link: { type: 'string' },
  },
  computedFields: {
    meetupDate: {
      type: 'string',
      resolve: (doc) => doc.meetup_date,
    },
  },
}));

export const Speaker = defineDocumentType(() => ({
  name: 'Speaker',
  filePathPattern: 'speakers/**/*.mdx',
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    image: { type: 'string' },
    twitter: { type: 'string' },
    github: { type: 'string' },
    company: { type: 'string' },
  },
  computedFields: {
    imageSrc: {
      type: 'string',
      resolve: (doc) => `/images/speakers/${doc.image}`,
    },
    twitterHref: {
      type: 'string',
      resolve: (doc) =>
        doc.twitter ? `https://twitter.com/${doc.twitter}` : undefined,
    },
    githubHref: {
      type: 'string',
      resolve: (doc) =>
        doc.github ? `https://github.com/${doc.github}` : undefined,
    },
  },
}));

export const Talk = defineDocumentType(() => ({
  name: 'Talk',
  filePathPattern: 'talks/**/*.mdx',
  contentType: 'mdx',
  fields: {
    kind: {
      type: 'enum',
      options: [
        'pause',
        'keynote',
        'quicky',
        'conference',
        'atelier',
        'pleniere',
        'sponsor',
      ],
      required: true,
    },
    title: { type: 'string', required: true },
    start: { type: 'date', required: true },
    end: { type: 'date' },
    room: {
      type: 'enum',
      options: ['A', 'B', 'C', 'D'],
      required: false,
    },
    rows: {
      type: 'number',
      required: false,
    },
    columns: {
      type: 'number',
      required: false,
    },
    speakers: { type: 'list', of: { type: 'string' } },
    subtitled: { type: 'boolean', default: false, required: false },
    feedback: { type: 'string', required: false },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Sponsor, Organiser, Meetup, Association, Speaker, Talk],
});
