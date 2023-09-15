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

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Sponsor, Organiser, Meetup, Association],
});
