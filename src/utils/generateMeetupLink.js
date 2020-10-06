import slugify from "slugify";

export const generateMeetupLink = (meetup) => {
  return `/meetups/events/${slugify(meetup.frontmatter.slug, {
    strict: true,
    lower: true,
  })}`;
};
