import { Meetup } from 'contentlayer/generated';
import slugify from 'slugify';

export const generateMeetupLink = (meetup: Meetup) => {
  return `/meetups/events/${slugify(meetup.slug, {
    strict: true,
    lower: true,
  })}`;
};
