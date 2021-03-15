import React from "react";
import { Tooltip, Stack, Link, IconButton } from "@chakra-ui/react";
import {
  FaTwitter,
  FaYoutube,
  FaTwitch,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaSlack,
  FaRss,
  FaSpotify,
  FaItunesNote,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Twitter",
    icon: <FaTwitter />,
    link: "http://twitter.com/codeursenseine",
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/channel/UCWujmG5rANxJI0nHbMFs08w/playlists",
  },
  {
    name: "Twitch",
    icon: <FaTwitch />,
    link: "https://www.twitch.tv/codeursenseine/",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/CodeursEnSeine/",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/codeursenseine",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/company/codeurs-en-seine",
  },
  {
    name: "Slack",
    icon: <FaSlack />,
    link: "https://go.codeursenseine.com/slack",
  },
  {
    name: "Flux RSS",
    icon: <FaRss />,
    link: "https://www.spreaker.com/show/3365517/episodes/feed",
  },
  {
    name: "Spotify",
    icon: <FaSpotify />,
    link: "https://open.spotify.com/show/28UM8IYvMF68hMm0IqO0M3",
  },
  {
    name: "iTunes",
    icon: <FaItunesNote />,
    link:
      "https://itunes.apple.com/fr/podcast/codeurs-en-seine/id1454150414?mt=2",
  },
];

export const NavSocial = (props) => {
  return (
    <Stack spacing="1" textAlign="center" {...props}>
      <Link href="mailto:contact@codeursenseine.com" fontSize="sm">
        contact@codeursenseine.com
      </Link>
      <Stack isInline spacing="0" justify="center" flexWrap="wrap">
        {socialLinks.map((social) => (
          <Tooltip
            key={social.link}
            zIndex="9999"
            placement="top"
            label={social.name}
          >
            <IconButton
              as="a"
              target="_blank"
              href={social.link}
              aria-label={social.name}
              icon={social.icon}
              variant="unstyled"
              size="md"
              d="inline-flex"
            />
          </Tooltip>
        ))}
      </Stack>
    </Stack>
  );
};
